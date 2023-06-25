import React, { useEffect, useState } from 'react';

const CoinTracker: React.FC = () => {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

    socket.onmessage = (event) => {
      const tickers = JSON.parse(event.data);

      const filteredCoins = tickers.filter((ticker: any) => {
        const priceChangePercent = parseFloat(ticker.P);
        const symbol = ticker.s;
        return (
          priceChangePercent >= 2 &&
          symbol.endsWith('USDT') &&
          symbol !== 'ETHUPUSDT' &&
          symbol !== 'BTCUPUSDT'
        );
      });

      const sortedCoins = filteredCoins.sort((a: any, b: any) => {
        if (a.s === 'BTCUSDT') return -1;
        if (b.s === 'BTCUSDT') return 1;
        if (a.s === 'ETHUSDT') return -1;
        if (b.s === 'ETHUSDT') return 1;
        return parseFloat(b.P) - parseFloat(a.P);
      });

      setCoins(sortedCoins);
    };

    return () => {
      socket.close();
    };
  }, []);

  const getArrowIcon = (percent: number) => {
    if (percent > 0) {
      return <span style={{ color: 'green' }}>▲</span>; // Yukarı ok işareti (yeşil renkte)
    } else if (percent < 0) {
      return <span style={{ color: 'red' }}>▼</span>; // Aşağı ok işareti (kırmızı renkte)
    }
    return null;
  };

  return (
    <div>
      <h1>Anlık Kripto Para Takip</h1>
      <table style={{ width: '100%', padding: '10px' }}>
        <thead>
          <tr>
            <th>Sembol</th>
            <th>Değişim Yüzdesi</th>
            <th>Anlık Fiyat</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin: any) => (
            <tr key={coin.s}>
              <td style={{ width: '33%' }}>{coin.s}</td>
              <td style={{ width: '33%' }}>
                {getArrowIcon(parseFloat(coin.P))}
                {coin.P}%
              </td>
              <td style={{ width: '34%' }}>{coin.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTracker;
