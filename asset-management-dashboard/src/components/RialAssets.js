import React, { useState } from 'react';

const RialAssets = ({ setTotalRial }) => {
  const [rials, setRials] = useState([{ name: '', value: 0 }]);

  const handleNameChange = (index, event) => {
    const newRials = [...rials];
    newRials[index].name = event.target.value;
    setRials(newRials);
  };

  const handleValueChange = (index, event) => {
    const newRials = [...rials];
    newRials[index].value = Number(event.target.value);
    setRials(newRials);
    setTotalRial(newRials.reduce((sum, rial) => sum + rial.value, 0));
  };

  const addRial = () => {
    setRials([...rials, { name: '', value: 0 }]);
  };

  return (
    <div className="asset-page">
      <h2>Rial Assets</h2>
      {rials.map((rial, index) => (
        <div key={index} className="asset-input">
          <label>Rial Asset {index + 1}</label>
          <input 
            type="text" 
            placeholder="Asset Name" 
            value={rial.name} 
            onChange={(e) => handleNameChange(index, e)} 
          />
          <label>
            Value (in Rial):
            <input 
              type="number"
              value={rial.value} 
              onChange={(e) => handleValueChange(index, e)} 
            />
          </label>
        </div>
      ))}
      <button onClick={addRial}>+</button>
    </div>
  );
};

export default RialAssets;
