import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState<any[]>([]); // portfolioData'nın başlangıç değeri olarak boş bir dizi belirtiyoruz

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = ''; // Kendi tokenınızı buraya yerleştirin
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get('https://api.binance.com/api/v3/account', { headers });

        if (response.data && response.data.balances) {
          setPortfolioData(response.data.balances);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Portföy</h1>
      <table>
        <thead>
          <tr>
            <th>Sembol</th>
            <th>Miktar</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData.map((asset) => (
            <tr key={asset.asset}>
              <td>{asset.asset}</td>
              <td>{asset.free}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
