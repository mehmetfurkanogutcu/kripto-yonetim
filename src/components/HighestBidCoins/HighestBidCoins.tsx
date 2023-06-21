import React, { useEffect, useState } from "react";
import axios from "axios";

interface Coin {
  symbol: string;
  bidPrice: string;
  bidQty: string;
}

const HighestBidCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/ticker/bookTicker"
        );

        const coinData: Coin[] = [];

        if (response.data) {
          for (const coin of response.data) {
            const { symbol, bidPrice, bidQty } = coin;
            if (symbol.endsWith("USDT")) {
              const newCoin: Coin = {
                symbol,
                bidPrice,
                bidQty,
              };
              coinData.push(newCoin);
            }
          }
        }

        const sortedData = coinData.sort(
          (a: Coin, b: Coin) => parseFloat(b.bidPrice) - parseFloat(a.bidPrice)
        );

        const limitedData = sortedData.slice(0, 10); // İstediğiniz sınırlama miktarını burada belirleyebilirsiniz

        setCoins(limitedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="dashboard-box p-3 shadow mb-3 bg-white rounded">
      <h3>En Yüksek Talep Fiyatına Sahip USDT Çiftleri</h3>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Sembol</th>
            <th>Talep Fiyatı</th>
            <th>Talep Miktarı</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <td>{coin.symbol}</td>
              <td>{coin.bidPrice}</td>
              <td>{coin.bidQty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighestBidCoins;
