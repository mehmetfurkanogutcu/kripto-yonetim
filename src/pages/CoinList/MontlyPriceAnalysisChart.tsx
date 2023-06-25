import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MontlyPriceAnalysisChart.css";

const MontlyPriceAnalysisChart = () => {
  const [monthlyData, setMonthlyData] = useState<any[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState("BTCUSDT");
  const symbols = ["BTCUSDT", "ETHUSDT", "ARBUSDT", "XRPUSDT", "DOGEUSDT", "SPELLUSDT", "SUSHIUSDT"];

  useEffect(() => {
    axios
      .get("https://api.binance.com/api/v3/klines", {
        params: {
          symbol: selectedSymbol,
          interval: "1M",
        },
      })
      .then((response) => {
        const monthlyPrices = response.data.map((kline: any) => ({
          openPrice: parseFloat(kline[1]),
          closePrice: parseFloat(kline[4]),
          lowPrice: parseFloat(kline[3]),
          highPrice: parseFloat(kline[2]),
          date: new Date(kline[0]).toLocaleDateString(),
        }));
        setMonthlyData(monthlyPrices);
      })
      .catch((error) => console.error(error));
  }, [selectedSymbol]);

  const getLowestMonth = () => {
    let lowestMonth = "";
    let lowestPrice = Number.MAX_SAFE_INTEGER;

    monthlyData.forEach((data) => {
      if (data.lowPrice < lowestPrice) {
        lowestPrice = data.lowPrice;
        lowestMonth = data.date;
      }
    });

    return lowestMonth;
  };

  const getHighestMonth = () => {
    let highestMonth = "";
    let highestPrice = Number.MIN_SAFE_INTEGER;

    monthlyData.forEach((data) => {
      if (data.highPrice > highestPrice) {
        highestPrice = data.highPrice;
        highestMonth = data.date;
      }
    });

    return highestMonth;
  };

  const getOverallLowestPrice = () => {
    let overallLowestPrice = Number.MAX_SAFE_INTEGER;

    monthlyData.forEach((data) => {
      if (data.lowPrice < overallLowestPrice) {
        overallLowestPrice = data.lowPrice;
      }
    });

    return overallLowestPrice;
  };

  const getOverallHighestPrice = () => {
    let overallHighestPrice = Number.MIN_SAFE_INTEGER;

    monthlyData.forEach((data) => {
      if (data.highPrice > overallHighestPrice) {
        overallHighestPrice = data.highPrice;
      }
    });

    return overallHighestPrice;
  };

  return (
    <div>
      <h1>Aylık Fiyat Analiz Tablosu</h1>

      <div className="info-container">
        <div className="info-box">
          <p>En Düşük Fiyat Görülen Ay: {getLowestMonth()}</p>
          <p>En Yüksek Fiyat Görülen Ay: {getHighestMonth()}</p>
        </div>
        <div className="info-box">
          <label>Koin Seçiniz:</label>
          <select
            value={selectedSymbol}
            onChange={(e) => setSelectedSymbol(e.target.value)}
          >
            {symbols.map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol}
              </option>
            ))}
          </select>
        </div>
        <div className="info-box">
          <p>En Düşük Görülen Fiyat: {getOverallLowestPrice()}</p>
          <p>En Yüksek Görülen Fiyat: {getOverallHighestPrice()}</p>
        </div>
      </div>
      <div className="select-container"></div>
      <table>
        <thead>
          <tr>
            <th>Tarih</th>
            <th>En Düşük Görülen Fiyat</th>
            <th>En Yüksek Görülen Fiyat</th>
            <th>Açılış Fiyatı</th>
            <th>Kapanış Fiyatı</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.lowPrice}</td>
              <td>{data.highPrice}</td>
              <td>{data.openPrice}</td>
              <td>{data.closePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MontlyPriceAnalysisChart;
