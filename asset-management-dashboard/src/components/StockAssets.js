import React, { useState } from 'react';

const StockAssets = ({ setTotalStock }) => {
  const [stocks, setStocks] = useState([{ name: '', value: 0 }]);

  const handleNameChange = (index, event) => {
    const newStocks = [...stocks];
    newStocks[index].name = event.target.value;
    setStocks(newStocks);
  };

  const handleValueChange = (index, event) => {
    const newStocks = [...stocks];
    newStocks[index].value = Number(event.target.value);
    setStocks(newStocks);
    setTotalStock(newStocks.reduce((sum, stock) => sum + stock.value, 0));
  };

  const addStock = () => {
    setStocks([...stocks, { name: '', value: 0 }]);
  };

  return (
    <div className="asset-page">
      <h2>Stock Assets</h2>
      {stocks.map((stock, index) => (
        <div key={index} className="asset-input">
          <label>Stock Asset {index + 1}</label>
          <input 
            type="text" 
            placeholder="Asset Name" 
            value={stock.name} 
            onChange={(e) => handleNameChange(index, e)} 
          />
          <label>
            Value (in Dollar):
            <input 
              type="number"
              value={stock.value} 
              onChange={(e) => handleValueChange(index, e)} 
            />
          </label>
        </div>
      ))}
      <button onClick={addStock}>+</button>
    </div>
  );
};

export default StockAssets;
