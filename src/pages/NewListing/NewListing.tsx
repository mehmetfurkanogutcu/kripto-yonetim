import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Coin {
  symbol: string;
  priceChangePercent: string;
  status: string;
  lastUpdateTime: number;
}

const NewListings = () => {
  const [listings, setListings] = useState<Coin[]>([]);

  useEffect(() => {
    axios
      .get('https://api.binance.com/api/v3/ticker/24hr')
      .then((response) => {
        const newCoins: Coin[] = response.data
          .filter((coin: Coin) => coin.status === 'TRADING')
          .sort(
            (a: Coin, b: Coin) =>
              new Date(b.lastUpdateTime).getTime() -
              new Date(a.lastUpdateTime).getTime()
          )
          .slice(0, 10);
        setListings(newCoins);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Newly Listed Coins</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price Change</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((coin: Coin, index: number) => (
            <tr key={index}>
              <td>{coin.symbol}</td>
              <td>{coin.priceChangePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewListings;
