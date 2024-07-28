import React, { useState } from 'react';

const CommodityAssets = ({ setTotalCommodity }) => {
  const [commodities, setCommodities] = useState([{ name: '', value: 0 }]);

  const handleNameChange = (index, event) => {
    const newCommodities = [...commodities];
    newCommodities[index].name = event.target.value;
    setCommodities(newCommodities);
  };

  const handleValueChange = (index, event) => {
    const newCommodities = [...commodities];
    newCommodities[index].value = Number(event.target.value);
    setCommodities(newCommodities);
    setTotalCommodity(newCommodities.reduce((sum, commodity) => sum + commodity.value, 0));
  };

  const addCommodity = () => {
    setCommodities([...commodities, { name: '', value: 0 }]);
  };

  return (
    <div className="asset-page">
      <h2>Commodity Assets</h2>
      {commodities.map((commodity, index) => (
        <div key={index} className="asset-input">
          <label>Commodity {index + 1}</label>
          <input 
            type="text" 
            placeholder="Asset Name" 
            value={commodity.name} 
            onChange={(e) => handleNameChange(index, e)} 
          />
          <label>
            Value (in Rial):
            <input 
              type="number"
              value={commodity.value} 
              onChange={(e) => handleValueChange(index, e)} 
            />
          </label>
        </div>
      ))}
      <button onClick={addCommodity}>+</button>
    </div>
  );
};

export default CommodityAssets;
