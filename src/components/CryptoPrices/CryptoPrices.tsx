import React, { useEffect, useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';

const PriceBox = ({symbol}: {symbol: string}) => {
  const [price, setPrice] = useState<string>('');
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`);

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(data.p);
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, [symbol]);

  return (
    <Col xs={6} md={6}>
      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-primary">
        <h5>{symbol}</h5>
        <h3>{price}</h3>
      </div>
    </Col>
  );
};

const CryptoPrices = () => {
  const coins = ['BTCUSDT', 'ETHUSDT', 'USDTTRY']; // Add coins as needed

  return (
   
      <Row>
        <p className="lead">
          Son <mark>fiyat</mark> bilgileri..
        </p>
        {coins.map((coin, index) => <PriceBox key={index} symbol={coin}/>)}
      </Row>
   
  );
}

export default CryptoPrices;
