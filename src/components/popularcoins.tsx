import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Coin {
  symbol: string;
  priceChangePercent: string;
  lastPrice: string;
  quoteVolume: string;
}

const PopularCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const fetchCoins = () => {
    axios.get('https://api.binance.com/api/v3/ticker/24hr')
      .then(response => {
        // Veriyi USDT ile bitenler ve belirli çiftler haricindekiler için filtrele
        const filteredData = response.data.filter(
          (coin: Coin) => coin.symbol.endsWith('USDT') &&
            coin.symbol !== 'USDCUSDT' &&
            coin.symbol !== 'BUSDUSDT' &&
            coin.symbol !== 'TUSDUSDT' &&
            coin.symbol !== 'EURUSDT'
        );
        // Veriyi işlem hacmine göre sırala
        const sortedData = filteredData.sort(
          (a: Coin, b: Coin) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume)
        );
        // Sadece ilk 20 sonucu al
        setCoins(sortedData.slice(0, 20));
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCoins(); // Bileşen yüklendiğinde bir kez veri çek
  }, []);

  return (
    <div>
      <h1>Top 20 Popular Coins</h1>
      <button onClick={fetchCoins}>Refresh</button>
      {coins.map((coin, index) => (
        <div key={index} className="coin-card">
          <h2>{index + 1}. {coin.symbol}</h2>
          <div>
            <span>Price: {coin.lastPrice} ({coin.priceChangePercent}%)</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCoins;
