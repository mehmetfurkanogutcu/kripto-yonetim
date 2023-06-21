import React, { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const PriceBox = ({ symbol }: { symbol: string }) => {
  const [price, setPrice] = useState<string>("");
  const [volatility, setVolatility] = useState<string>("");

  const ws = useRef<WebSocket | null>(null);
  const priceHistory = useRef<number[]>([]);

  useEffect(() => {
    ws.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const currentPrice = data.p;
      setPrice(currentPrice);
      updateVolatility(parseFloat(currentPrice));
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, [symbol]);

  const updateVolatility = (currentPrice: number) => {
    const currentPriceHistory = priceHistory.current;
    currentPriceHistory.push(currentPrice);
    priceHistory.current = currentPriceHistory.slice(-50);

    if (currentPriceHistory.length > 1) {
      const priceChanges = currentPriceHistory.map((price, index) => {
        if (index > 0) {
          return (
            (price - currentPriceHistory[index - 1]) /
            currentPriceHistory[index - 1]
          );
        }
        return 0;
      });

      const volatility = calculateVolatility(priceChanges);
      setVolatility(volatility);
    }
  };

  const calculateVolatility = (priceChanges: number[]) => {
    const standardDeviation = Math.sqrt(
      priceChanges.reduce((sum, change) => sum + Math.pow(change, 2), 0) /
        priceChanges.length
    );
    return (standardDeviation * Math.sqrt(24 * 60)).toFixed(2); // Günlük volatilite
  };

  const getVolatilityCategory = () => {
    const volatilityValue = parseFloat(volatility);

    if (volatilityValue >= 2) {
      return "Yüksek";
    } else if (volatilityValue >= 1) {
      return "Orta";
    } else {
      return "Düşük";
    }
  };

  return (
    <Col xs={6} md={6}>
      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-primary">
        <h5>{symbol}</h5>
        <h3>{price}</h3>
        <p>
          Volatilite: {volatility} ({getVolatilityCategory()})
        </p>
      </div>
    </Col>
  );
};

const CryptoPricesVolatil = () => {
  const coins = ["BTCUSDT", "ETHUSDT", "USDTTRY"]; // İzlenecek coinleri buraya ekleyin

  return (
    <Row>
      <p className="lead">
        Son <mark>fiyat</mark> bilgileri..
      </p>
      {coins.map((coin, index) => (
        <PriceBox key={index} symbol={coin} />
      ))}
    </Row>
  );
};

export default CryptoPricesVolatil;
