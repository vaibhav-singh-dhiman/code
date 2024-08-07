import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SilderSelector = () => {
  const [value, setValue] = useState(50);

  const handleSliderChange = (value) => {
    setValue(value);
  };

  return (
    <div style={{ width: 200, margin: '50px auto' }}>
      <h3>Simple Slider</h3>
      <Slider 
        min={0} 
        max={10000} 
        defaultValue={value} 
        onChange={handleSliderChange} 
      />
      <div>
        <p>Selected Value: {value}</p>
      </div>
    </div>
  );
};

export default SilderSelector;
