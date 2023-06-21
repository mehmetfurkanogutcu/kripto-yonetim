import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const FuturesGame = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');
  const [leverage, setLeverage] = useState('');
  const [positionType, setPositionType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [coinList, setCoinList] = useState<string[]>([]);
  const [openPosition, setOpenPosition] = useState<any>(null);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [liquidationPrice, setLiquidationPrice] = useState<number | null>(null);
  const [profitLossPercentage, setProfitLossPercentage] = useState<number | null>(null);

  useEffect(() => {
    fetchCoinList();
  }, []);

  useEffect(() => {
    if (selectedCoin) {
      fetchCurrentPrice(selectedCoin);
    }
  }, [selectedCoin]);

  const fetchCoinList = async () => {
    try {
      const response = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
      const coins = response.data.symbols.filter((symbol: any) => symbol.symbol.endsWith('USDT'));
      const coinNames = coins.map((coin: any) => coin.symbol);
      setCoinList(coinNames);
    } catch (error) {
      console.error('Error fetching coin list:', error);
    }
  };

  const fetchCurrentPrice = async (symbol: string) => {
    try {
      const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
      const price = parseFloat(response.data.price);
      setCurrentPrice(price);
    } catch (error) {
      console.error('Error fetching current price:', error);
    }
  };

  const calculateProfitLoss = () => {
    if (currentPrice !== null && openPosition !== null) {
      const entryPrice = parseFloat(openPosition.entryPrice);
      const quantity = parseFloat(openPosition.quantity);

      const profitLoss = (currentPrice - entryPrice) * quantity;
      const profitLossPercentage = ((currentPrice - entryPrice) / entryPrice) * 100;

      setProfitLossPercentage(profitLossPercentage);
      return profitLoss;
    }

    return null;
  };

  const calculateLiquidationPrice = (entryPrice: number, positionType: string) => {
    let liquidationPrice;
    if (positionType === 'long') {
      liquidationPrice = entryPrice * 0.95;
    } else {
      liquidationPrice = entryPrice * 1.05;
    }
    return liquidationPrice.toFixed(2);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const entryPrice = currentPrice || 0;
    const liquidationPrice = calculateLiquidationPrice(entryPrice, positionType);
    const profitLoss = calculateProfitLoss() || 0;

    const position = {
      investmentAmount,
      selectedCoin,
      leverage,
      positionType,
      quantity,
      entryPrice,
      liquidationPrice,
      profitLoss,
    };
    setOpenPosition(position);
  };

  return (
    <div className="container">
      <h1>Vadeli İşlem Oyunu</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="investmentAmount" className="form-label">
            Yatırım Miktarı:
          </label>
          <input
            type="text"
            id="investmentAmount"
            className="form-control"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="selectedCoin" className="form-label">
            Coin Seçiniz:
          </label>
          <select
            id="selectedCoin"
            className="form-select"
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
          >
            <option value="">Seçiniz</option>
            {coinList.map((coin) => (
              <option key={coin} value={coin}>
                {coin}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="leverage" className="form-label">
            Kaldıraç Seviyesi:
          </label>
          <select
            id="leverage"
            className="form-select"
            value={leverage}
            onChange={(e) => setLeverage(e.target.value)}
          >
            <option value="">Seçiniz</option>
            <option value="5x">5x</option>
            <option value="10x">10x</option>
            <option value="20x">20x</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="positionType" className="form-label">
            Pozisyon Türü:
          </label>
          <select
            id="positionType"
            className="form-select"
            value={positionType}
            onChange={(e) => setPositionType(e.target.value)}
          >
            <option value="">Seçiniz</option>
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Miktar:
          </label>
          <input
            type="text"
            id="quantity"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {openPosition ? 'İşlem Aç' : 'Hesapla'}
        </button>
      </form>
      {openPosition && (
        <div className="mt-4">
          <h3>Açık İşlem</h3>
          <p>Yatırım Miktarı: {openPosition.investmentAmount}</p>
          <p>Seçilen Coin: {openPosition.selectedCoin}</p>
          <p>Kaldıraç Seviyesi: {openPosition.leverage}</p>
          <p>Pozisyon Türü: {openPosition.positionType}</p>
          <p>Miktar: {openPosition.quantity}</p>
          <p>Giriş Fiyatı: {openPosition.entryPrice}</p>
          <p>Liq. Price: {openPosition.liquidationPrice}</p>
          <p>
            Yüzde Kar/Zarar: {profitLossPercentage !== null ? `${profitLossPercentage.toFixed(2)}%` : '-'}
          </p>
        </div>
      )}
      {currentPrice !== null && (
        <div className="mt-4">
          <h3>Anlık Fiyat</h3>
          <p>{currentPrice}</p>
          <div
            className={`mt-2 ${
              profitLossPercentage !== null ? (profitLossPercentage >= 0 ? 'text-success' : 'text-danger') : ''
            }`}
          >
            {profitLossPercentage !== null && profitLossPercentage >= 0 ? 'Kar' : 'Zarar'} durumundasınız.
          </div>
        </div>
      )}
    </div>
  );
};

export default FuturesGame;
