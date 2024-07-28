import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CommodityAssets from './components/CommodityAssets';
import CurrencyAssets from './components/CurrencyAssets';
import RialAssets from './components/RialAssets';
import StockAssets from './components/StockAssets';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [totalCommodity, setTotalCommodity] = useState(0);
  const [totalCurrency, setTotalCurrency] = useState(0);
  const [totalRial, setTotalRial] = useState(0);
  const [totalStock, setTotalStock] = useState(0);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home 
            totalCommodity={totalCommodity}
            totalCurrency={totalCurrency}
            totalRial={totalRial}
            totalStock={totalStock}
          />} 
        />
        <Route 
          path="/commodity" 
          element={<CommodityAssets setTotalCommodity={setTotalCommodity} />} 
        />
        <Route 
          path="/currency" 
          element={<CurrencyAssets setTotalCurrency={setTotalCurrency} />} 
        />
        <Route 
          path="/rial" 
          element={<RialAssets setTotalRial={setTotalRial} />} 
        />
        <Route 
          path="/stock" 
          element={<StockAssets setTotalStock={setTotalStock} />} 
        />
        <Route 
          path="/register" 
          element={<Register />} 
        />
        <Route 
          path="/login" 
          element={<Login />} 
        />
      </Routes>
    </div>
  );
};

export default App;
