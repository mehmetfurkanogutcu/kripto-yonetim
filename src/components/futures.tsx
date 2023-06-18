import React, { useEffect, useState } from "react";
import axios from "axios";
import "./futures.css"; // CSS dosyasını içe aktar

const Futures = () => {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [symbolList, setSymbolList] = useState([]);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [purchase, setPurchase] = useState({ price: 0, amount: 0 });
  const [purchases, setPurchases] = useState<any[]>([]); // Alım işlemlerini tutacak dizi

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
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const price = parseFloat(data.p);
      setCurrentPrice(price);
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSymbol(event.target.value);
  };

  const handlePurchasePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const price = parseFloat(event.target.value);
    setPurchase((prevPurchase) => ({ ...prevPurchase, price }));
  };

  const handlePurchaseAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = parseFloat(event.target.value);
    setPurchase((prevPurchase) => ({ ...prevPurchase, amount }));
  };

  const handleSavePurchase = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const purchaseWithSymbol = { ...purchase, symbol }; // İşlem çiftini kaydedin
    setPurchases((prevPurchases) => [...prevPurchases, purchaseWithSymbol]);
    setPurchase({ price: 0, amount: 0 });
  };

  // Alım işlemler  // Alım işlemlerini LocalStorage'a kaydetme
  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases]);

  // Alım işlemlerini LocalStorage'dan çekme
  useEffect(() => {
    const storedPurchases = localStorage.getItem("purchases");
    if (storedPurchases) {
      setPurchases(JSON.parse(storedPurchases));
    }
  }, []);

  const profitLossColor =
    currentPrice && purchases.length > 0
      ? currentPrice > purchases[0].price
        ? "green"
        : "red"
      : "";

  return (
    <div className="container">
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
        <label className="input-label" htmlFor="current-price">
          Şu Anki Fiyat
        </label>
        <div className="current-price-box">{currentPrice || "-"}</div>
      </div>
      <form className="input-group" onSubmit={handleSavePurchase}>
        <label className="input-label" htmlFor="purchase-price">
          Alım Fiyatı
        </label>
        <input
          id="purchase-price"
          className="input-box"
          type="number"
          value={purchase.price}
          onChange={handlePurchasePriceChange}
          placeholder="Alım Fiyatını Girin"
        />
        <label className="input-label" htmlFor="purchase-amount">
          Alım Adet Miktarı
        </label>
        <input
          id="purchase-amount"
          className="input-box"
          type="number"
          value={purchase.amount}
          onChange={handlePurchaseAmountChange}
          placeholder="Alım Miktarını Girin"
        />
        <button type="submit" className="save-button">
          Kaydet
        </button>
      </form>
      <table className="purchases-table">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Alım Fiyatı</th>
            <th>Alım Adet Miktarı</th>
            <th>Anlık Fiyat</th>
            <th>Kar/Zarar</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase, index) => (
            <tr key={index}>
              <td>{purchase.symbol}</td> {/* İşlem çiftini tabloya ekleyin */}
              <td>{purchase.price}</td>
              <td>{purchase.amount}</td>
              <td>{currentPrice || "-"}</td>
              <td className={`profit-loss-cell ${profitLossColor}`}>
                {((currentPrice || 0) - purchase.price) * purchase.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Futures;
