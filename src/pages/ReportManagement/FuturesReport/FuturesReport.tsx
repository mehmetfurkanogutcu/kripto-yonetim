import React, { useState } from 'react';

const FuturesReport = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');
  const [entryPrice, setEntryPrice] = useState('');
  const [tickSize, setTickSize] = useState('');

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    // Form submit işlemleri burada yapılabilir
  };

  return (
    <div>
      <h1>FuturesReport</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="investmentAmount">Yatırım Miktarı:</label>
          <input
            type="text"
            id="investmentAmount"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="selectedCoin">Coin Seçiniz:</label>
          <select
            id="selectedCoin"
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
          >
            <option value="">Seçiniz</option>
            {/* Binance'deki USDT ile biten coinlerin listesi burada olabilir */}
          </select>
        </div>
        <div>
          <label htmlFor="entryPrice">İşleme Girilen Fiyat:</label>
          <input
            type="text"
            id="entryPrice"
            value={entryPrice}
            onChange={(e) => setEntryPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tickSize">Tick Size Kaç x:</label>
          <select
            id="tickSize"
            value={tickSize}
            onChange={(e) => setTickSize(e.target.value)}
          >
            <option value="1x">1x</option>
            <option value="2x">2x</option>
            <option value="10x">10x</option>
          </select>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default FuturesReport;
