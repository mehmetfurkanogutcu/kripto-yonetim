import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./CoinAnalysis.css"; // CSS dosyasını içe aktar
import { GiBull, GiBearHead } from "react-icons/gi";

type Candlestick = [
  number,
  string,
  string,
  string,
  string,
  string,
  number,
  string,
  number,
  number,
  string,
  string
];

type CandlestickData = {
  time: string;
  open: number;
  close: number;
  high: number;
  low: number;
  color: string;
  difference: string;
  percentage: string;
  profit: string;
  gainLoss: number;
};

const CoinAnalysis = () => {
  const [data, setData] = useState<CandlestickData[] | null>(null);
  const [greenCount, setGreenCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(0); // Yatırım miktarı
  const [interval, setInterval] = useState("1d");
  const [symbol, setSymbol] = useState("BTCUSDT"); // symbol state'i oluşturuldu
  const [symbolList, setSymbolList] = useState([]); // symbol list state'i oluşturuldu
  const [currentPrice, setCurrentPrice] = useState(0);

  
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCurrentPrice(data.p);
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, [symbol]);

  const limit = 134;

  const intervals = [
    "1m",
    "3m",
    "5m",
    "15m",
    "30m",
    "1h",
    "2h",
    "4h",
    "6h",
    "8h",
    "12h",
    "1d",
    "3d",
    "1w",
    "1M",
  ];

  const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSymbol(event.target.value); // Seçilen değeri symbol state'ine ata
  };

  const handleIntervalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInterval(event.target.value);
  };

  const handleInvestmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvestmentAmount(parseFloat(event.target.value));
  };

  useEffect(() => {
    const getSymbols = async () => {
      try {
        const response = await axios.get(
          `https://api.binance.com/api/v3/ticker/price`
        );
        const usdtSymbols = response.data
          .filter((coin: any) => coin.symbol.endsWith("USDT"))
          .map((coin: any) => coin.symbol);
        setSymbolList(usdtSymbols);
      } catch (error) {
        console.error(error);
      }
    };

    getSymbols();
  }, []);

  useEffect(() => {
    const getOHLCData = async () => {
      try {
        const response = await axios.get(
          `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`
        );
        let greens = 0;
        let reds = 0;
        const candlestickData = response.data.map(
          (candlestick: Candlestick) => {
            const open = parseFloat(candlestick[1]);
            const high = parseFloat(candlestick[2]);
            const low = parseFloat(candlestick[3]);
            const close = parseFloat(candlestick[4]);
            const difference = Math.abs(close - open).toFixed(2);
            const percentage = (((close - open) / open) * 100).toFixed(2);
            const profit = (close >= open ? "+" : "-") + percentage;
            const color = close >= open ? "green" : "red";
            const time = new Date(candlestick[0]).toLocaleString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            });
            if (color === "green") greens++;
            else reds++;

            const gainLoss = ((close - open) / open) * investmentAmount;

            return {
              time,
              open,
              close,
              high,
              low,
              color,
              difference,
              percentage,
              profit,
              gainLoss,
            };
          }
        );

        setData(candlestickData);
        setGreenCount(greens);
        setRedCount(reds);
      } catch (error) {
        console.error(error);
      }
    };

    getOHLCData();
  }, [symbol, interval, limit, investmentAmount]);

  const marketDominance =
    greenCount > redCount ? "Boğalar önde" : "Ayılar önde";
  const DominanceIcon =
    greenCount > redCount ? <GiBull size={32} /> : <GiBearHead size={32} />;

  return (
    <div className="container">
      <div className="input-container">
        <div className="input-group">
          <label className="input-label" htmlFor="current-price">
            Şu Anki Fiyat
          </label>
          <div className="current-price-box">{currentPrice}</div>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="symbol">
            Coin
          </label>
          <select
            id="symbol"
            className="input-box"
            value={symbol}
            onChange={handleSymbolChange}
          >
            {symbolList.map((symbolOption) => (
              <option key={symbolOption} value={symbolOption}>
                {symbolOption}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="interval">
            Periyot
          </label>
          <select
            id="interval"
            className="input-box"
            value={interval}
            onChange={handleIntervalChange}
          >
            {intervals.map((intervalOption) => (
              <option key={intervalOption} value={intervalOption}>
                {intervalOption}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="investment-amount">
            Yatırım Miktarı
          </label>
          <input
            id="investment-amount"
            className="input-box"
            type="number"
            value={investmentAmount}
            onChange={handleInvestmentChange}
            placeholder="Yatırım Miktarını Girin"
          />
        </div>
      </div>
      <div className="count-boxes">
        <div className="green-count-box">
          <h2>Yeşil Mum Sayısı: {greenCount}</h2>
        </div>
        <div className="dominance-box">
          <h2>{marketDominance}</h2>
          {DominanceIcon}
        </div>
        <div className="red-count-box">
          <h2>Kırmızı Mum Sayısı: {redCount}</h2>
        </div>
      </div>
      {data ? (
        <>
          <table className="styled-table-coin">
            <thead>
              <tr>
                <th>Tarih</th>
                <th>Açılış Fiyatı</th>
                <th>Kapanış Fiyatı</th>
                <th>Görülen En Yüksek Fiyat</th>
                <th>Görülen En Düşük Fiyat</th>
                <th>Durum</th>
                <th>Fark</th>
                <th>Yüzdelik Fark (%)</th>
                <th>Kar/Zarar</th>
                <th>Kazanç/Kayıp</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
                  <td>{item.open}</td>
                  <td>{item.close}</td>
                  <td>{item.high}</td>
                  <td>{item.low}</td>
                  <td style={{ color: item.color }}>
                    {item.color === "green"
                      ? "Piyasa Olumlu"
                      : "Piyasa Olumsuz"}
                  </td>
                  <td>{item.difference}</td>
                  <td>{item.percentage}%</td>
                  <td style={{ color: item.color }}>{item.profit}</td>
                  <td>{item.gainLoss.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={9}></td>
                <td>
                  Toplam Kazanç/Kayıp:{" "}
                  {data
                    .reduce((total, item) => total + item.gainLoss, 0)
                    .toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default CoinAnalysis;
