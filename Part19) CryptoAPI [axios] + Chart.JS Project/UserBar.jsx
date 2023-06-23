import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import './crypto.css';

const UserBar = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coinlore.net/api/tickers/');
      const sortedData = response.data.data.sort((a, b) => b.price_usd - a.price_usd);
      setCryptoData(sortedData);
    };

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const labels = cryptoData.map(eachCrypto => eachCrypto.name);
  const datasets = [
    {
      label: 'Volume traded (last 24 hr)',
      data: cryptoData.map(eachCrypto => eachCrypto.volume24),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ];

  const datasets2 = [
    {
      label: 'Market Cap',
      data: cryptoData.map(eachCrypto => eachCrypto.market_cap_usd),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ];

  

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container style={{ fontFamily: 'poppins', backgroundColor: 'black' }}>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px', color: 'white' }}>
            CryptoTracker
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th style={{ backgroundColor: 'red', border: '4px solid black', fontFamily: 'cursive', textAlign: 'center' }}>
                  Crypto Name
                </th>
                <th style={{ backgroundColor: 'blue', border: '4px solid black', fontFamily: 'cursive', textAlign: 'center' }}>
                  Price Change in 24 Hours
                </th>
                <th style={{ backgroundColor: 'yellow', border: '4px solid black', fontFamily: 'cursive', textAlign: 'center' }}>
                  Price of 1 Crypto
                </th>
                <th style={{ backgroundColor: 'orange', border: '4px solid black', fontFamily: 'cursive', textAlign: 'center' }}>
                  Market Cap
                </th>
                <th style={{ backgroundColor: '#FF78C4', border: '4px solid black', fontFamily: 'cursive', textAlign: 'center' }}>
                  Volume Traded (in last 24hrs)
                </th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map(eachCrypto => (
                <tr key={eachCrypto.id}>
                  <td style={{ backgroundColor: '#00DFA2', border: '4px solid black', textAlign: 'center' }}>
                    {eachCrypto.name} ({eachCrypto.symbol})
                  </td>
                  <td style={{ backgroundColor: '#FFE7A0', border: '4px solid black', textAlign: 'center' }}>
                    {eachCrypto.percent_change_24h}%
                  </td>
                  <td style={{ backgroundColor: '#9BABB8', border: '4px solid black', textAlign: 'center' }}>
                    {eachCrypto.price_usd} $
                  </td>
                  <td style={{ backgroundColor: '#FFD95A', border: '4px solid black', textAlign: 'center' }}>
                    {eachCrypto.market_cap_usd}
                  </td>
                  <td style={{ backgroundColor: '#DDE6ED', border: '4px solid black', textAlign: 'center' }}>
                    {eachCrypto.volume24}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="chart-container"> 
          <h1 style={{textAlign:'center',color:'white'}}>Volume Traded (last 24 hours)</h1>
            <Line data={{ labels, datasets }} options={options} />
          </div>

          <div className="chart-container chart">
          <h1 style={{textAlign:'center',color:'white'}}>Market Cap</h1>
          <Line data={{ labels, datasets: datasets2 }} options={options} />
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserBar;




