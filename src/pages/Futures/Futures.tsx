import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

interface Symbol {
  symbol: string;
  leverage: {
    initialLeverage: number;
    notionalCap: number;
    notionalFloor: number;
    maintMarginRatio: number;
  }[];
}

const Futures = () => {
  const [futuresData, setFuturesData] = useState<Symbol[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fapi.binance.com/fapi/v1/leverageBracket');
        console.log(response.data); // Kaldıraç oranları bilgilerini konsola yazdır

        const symbols: Symbol[] = response.data;
        setFuturesData(symbols);
      } catch (error: unknown) {
        console.error('Hata:', (error as Error).message);
      }
    };

    const delay = setTimeout(() => {
      fetchData();
    }, 1000); // 1 saniye bekleme süresi

    return () => clearTimeout(delay);
  }, []);

  console.log(futuresData); // futuresData'yı konsola yazdır

  return (
    <div>
      <h2>Futures</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Max Leverage</th>
            <th>Min Leverage</th>
          </tr>
        </thead>
        <tbody>
          {futuresData.map((symbol: Symbol, index: number) => (
            <tr key={index}>
              <td>{symbol.symbol}</td>
              <td>
                {symbol.leverage.length > 0 ? Math.max(...symbol.leverage.map((l) => l.initialLeverage)) : 'N/A'}
              </td>
              <td>
                {symbol.leverage.length > 0 ? Math.min(...symbol.leverage.map((l) => l.initialLeverage)) : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Futures;
