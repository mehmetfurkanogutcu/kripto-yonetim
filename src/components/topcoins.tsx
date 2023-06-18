import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './topcoins.css';

interface Coin {
  symbol: string;
  priceChangePercent: string;
  lastPrice: string;
}

const TopCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const fetchCoins = () => {
    axios.get('https://api.binance.com/api/v3/ticker/24hr')
      .then(response => {
        // Veriyi USDT ile bitenler için filtrele
        const filteredData = response.data.filter(
          (coin: Coin) => coin.symbol.endsWith('USDT')
        );
        // Veriyi yüzde değişime göre sırala
        const sortedData = filteredData.sort(
          (a: Coin, b: Coin) => parseFloat(b.priceChangePercent) - parseFloat(a.priceChangePercent)
        );
        // Sadece ilk 10 sonucu al
        setCoins(sortedData.slice(0, 10));
      })
      .catch(error => console.error(error));
  };

  useEffect(fetchCoins, []); // Bileşen yüklendiğinde bir kez veri çek

  return (
    <div>
      <h1>Top 10 Rising Coins</h1>
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

export default TopCoins;
