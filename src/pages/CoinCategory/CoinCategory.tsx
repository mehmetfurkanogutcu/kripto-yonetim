import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinList = () => {
  const [coinList, setCoinList] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://api.binance.com/api/v3/exchangeInfo")
      .then((response) => {
        const coins = response.data.symbols
          .filter((symbol: any) => symbol.quoteAsset === "USDT")
          .map((symbol: any) => ({
            symbol: symbol.symbol,
            baseAsset: symbol.baseAsset,
            category: "Unknown",
          }));
        setCoinList(coins);
  
        fetchCoinCategories();
      })
      .catch((error) => console.error(error));
  }, []);
  
  const fetchCoinCategories = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/categories")
      .then((response) => {
        const categories = response.data;
  
        setCoinList((coins) =>
          coins.map((coin) => ({
            ...coin,
            category: getCoinCategory(coin.baseAsset, categories),
          }))
        );
      })
      .catch((error) => console.error(error));
  };
  
  const getCoinCategory = (baseAsset: string, categories: any[]) => {
    const coinCategory = categories.find((category) => {
      return category.coins && category.coins.some((coin: any) => coin === baseAsset);
    });
  
    return coinCategory ? coinCategory.name : "Unknown";
  };
  
  

  return (
    <div>
      <h1>Coin List</h1>

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin, index) => (
            <tr key={index}>
              <td>{coin.symbol}</td>
              <td>{coin.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
