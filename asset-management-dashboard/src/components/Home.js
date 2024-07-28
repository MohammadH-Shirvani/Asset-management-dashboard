import React, { useState } from 'react';

const Home = ({ totalCommodity, totalCurrency, totalRial, totalStock }) => {
  const [dollarRate, setDollarRate] = useState(0);

  const handleDollarRateChange = (e) => {
    setDollarRate(Number(e.target.value));
  };

  const calculateTotalInRial = () => {
    const totalInRial = totalCommodity + (totalCurrency * dollarRate) + totalRial + (totalStock * dollarRate);
    return totalInRial;
  };

  return (
    <div>
      <h1 className="home-header">Asset Management Dashboard</h1>
      <div className="home-input-group">
        <label>
          Dollar Rate:
          <input type="number" value={dollarRate} onChange={handleDollarRateChange} />
        </label>
      </div>
      <div className="home-summary">
        <h2>Total Assets</h2>
        <p>Commodity Assets: {totalCommodity} Rial</p>
        <p>Currency Assets: {totalCurrency} Dollar</p>
        <p>Rial Assets: {totalRial} Rial</p>
        <p>Stock Assets: {totalStock} Dollar</p>
        <h3>Total in Rial: {calculateTotalInRial()} Rial</h3>
      </div>
    </div>
  );
};

export default Home;
