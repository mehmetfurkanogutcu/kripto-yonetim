/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HighSpreadCoins.scss"; // SCSS dosyasını içe aktar
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

interface Coin {
  symbol: string;
  priceChangePercent: string;
  lastPrice: string;
  bidPrice: string;
  askPrice: string;
}

const HighSpreadCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/ticker/24hr"
        );
        const filteredData = response.data.filter((coin: Coin) =>
          coin.symbol.endsWith("USDT")
        );
        const sortedData = filteredData.sort((a: Coin, b: Coin) => {
          const aSpread = parseFloat(a.askPrice) - parseFloat(a.bidPrice);
          const bSpread = parseFloat(b.askPrice) - parseFloat(b.bidPrice);
          return bSpread - aSpread;
        });
        setCoins(sortedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
  }, []);

  const getSpreadColor = (spread: number) => {
    if (spread > 0.001) {
      return "green"; // Yeşil renk
    } else if (spread < -0.001) {
      return "red"; // Kırmızı renk
    } else {
      return "black"; // Siyah renk
    }
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage > 3) {
      return "bold green"; // Yeşil renk ve bold yazı tipi
    } else if (percentage < -3) {
      return "bold red"; // Kırmızı renk ve bold yazı tipi
    } else {
      return ""; // Varsayılan stil
    }
  };

  const getChangeIcon = (percentage: number) => {
    if (percentage > 0) {
      return <FiArrowUp className="change-icon up" />;
    } else if (percentage < 0) {
      return <FiArrowDown className="change-icon down" />;
    } else {
      return null;
    }
  };

  return (
    <div className="dashboard-box p-3 shadow mb-3 bg-white rounded">
      <h3>En Yüksek Alış-Satış Fiyat Farkına Sahip Coinler</h3>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Sembol</th>
            <th>Fiyat Değişimi (%)</th>
            <th>Son Fiyat</th>
            <th>Alış Fiyatı</th>
            <th>Satış Fiyatı</th>
            <th>Fiyat Farkı</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <td>{coin.symbol}</td>
              <td
                className={getPercentageColor(
                  parseFloat(coin.priceChangePercent)
                )}
              >
                {getChangeIcon(parseFloat(coin.priceChangePercent))}
                {coin.priceChangePercent}%
              </td>
              <td>${parseFloat(coin.lastPrice).toFixed(2)}</td>
              <td>${parseFloat(coin.bidPrice).toFixed(2)}</td>
              <td>${parseFloat(coin.askPrice).toFixed(2)}</td>
              <td
                style={{
                  color: getSpreadColor(
                    parseFloat(coin.askPrice) - parseFloat(coin.bidPrice)
                  ),
                  fontWeight: "bold",
                }}
              >
                {(
                  parseFloat(coin.askPrice) - parseFloat(coin.bidPrice)
                ).toFixed(8)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighSpreadCoins;*/
export {}
