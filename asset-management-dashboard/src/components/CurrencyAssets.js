import React, { useState } from 'react';

const CurrencyAssets = ({ setTotalCurrency }) => {
  const [currencies, setCurrencies] = useState([{ name: '', value: 0 }]);

  const handleNameChange = (index, event) => {
    const newCurrencies = [...currencies];
    newCurrencies[index].name = event.target.value;
    setCurrencies(newCurrencies);
  };

  const handleValueChange = (index, event) => {
    const newCurrencies = [...currencies];
    newCurrencies[index].value = Number(event.target.value);
    setCurrencies(newCurrencies);
    setTotalCurrency(newCurrencies.reduce((sum, currency) => sum + currency.value, 0));
  };

  const addCurrency = () => {
    setCurrencies([...currencies, { name: '', value: 0 }]);
  };

  return (
    <div className="asset-page">
      <h2>Currency Assets</h2>
      {currencies.map((currency, index) => (
        <div key={index} className="asset-input">
          <label>Currency {index + 1}</label>
          <input 
            type="text" 
            placeholder="Asset Name" 
            value={currency.name} 
            onChange={(e) => handleNameChange(index, e)} 
          />
          <label>
            Value (in Dollar):
            <input 
              type="number"
              value={currency.value} 
              onChange={(e) => handleValueChange(index, e)} 
            />
          </label>
        </div>
      ))}
      <button onClick={addCurrency}>+</button>
    </div>
  );
};

export default CurrencyAssets;
