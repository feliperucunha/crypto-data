import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, CryptoCurrencies, Homepage, CryptoDetails, News } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
          Created with love by
          <a style={{paddingLeft: '5px', paddingRight: '5px'}} target="_blank" href="https://www.linkedin.com/in/feliperubencunha/" rel="noreferrer">Felipe Cunha</a>-
          Other projects on my 
          <a style={{paddingLeft: '5px'}} target="_blank" href="https://github.com/feliperucunha" rel="noreferrer">Github</a>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Crypto Currencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App