import axios from 'axios';
import React, { useEffect, useState } from 'react';

const calculateMovingAverage = (klines: number[][], period: number) => {
  const closePrices = klines.slice(-period).map((kline) => Number(kline[4]));
  const sum = closePrices.reduce((a, b) => a + b, 0);
  const average = sum / period;
  return average;
};

const movingAverages = [30, 50, 100, 200, 250, 300, 350, 400, 450, 500];

const MovingAveragePages = () => {
  const [maValues, setMaValues] = useState<{ [key: number]: number | null }>({});

  useEffect(() => {
    const getKlines = async () => {
      try {
        const response = await axios.get<number[][]>(
          'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=500',
        );
        const newMaValues: { [key: number]: number | null } = {};
        for (const ma of movingAverages) {
          newMaValues[ma] = calculateMovingAverage(response.data, ma);
        }
        setMaValues(newMaValues);
      } catch (error) {
        console.error('Failed to fetch klines data:', error);
      }
    };

    getKlines();
  }, []);

  return (
    <div>
      {movingAverages.map((ma) => (
        <div key={ma}>{ma}-day moving average: {maValues[ma]}</div>
      ))}
    </div>
  );
};

export default MovingAveragePages;
