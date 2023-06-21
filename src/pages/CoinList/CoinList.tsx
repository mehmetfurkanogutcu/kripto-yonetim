import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CoinList.css";

const CoinList = () => {
  const [monthlyData, setMonthlyData] = useState<any[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState("BTCUSDT");
  const symbols = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "XRPUSDT", "DOGEUSDT", "SPELLUSDT", "SUSHIUSDT"];

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
      <h1>BTCUSDT Monthly Prices</h1>

      <div className="info-container">
        <div className="info-box">
          <p>Lowest month: {getLowestMonth()}</p>
          <p>Highest month: {getHighestMonth()}</p>
        </div>
        <div className="info-box">
          <label>Select Symbol:</label>
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
          <p>Overall lowest price: {getOverallLowestPrice()}</p>
          <p>Overall highest price: {getOverallHighestPrice()}</p>
        </div>
      </div>
      <div className="select-container"></div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Lowest Price</th>
            <th>Highest Price</th>
            <th>Open Price</th>
            <th>Close Price</th>
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

export default CoinList;
