import { useEffect, useState } from "react";
import RangeSlider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const Slider = () => {
  const [value, setValue] = useState(50);
  const [left, setLeft] = useState(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider">
      <div className="range-container">
        <label
          htmlFor="range"
          style={{
            left: value === 100 ? `${value - 5}%` : `${value - 5}%`,
          }}>
          {value}
        </label>
        <input
          defaultValue={50}
          type="range"
          name="range"
          onChange={handleChange}
          id="range"
          min="0"
          max="100"
          step={10}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>10%</div>
        <div>100%</div>
      </div>
    </div>
  );
};

export default Slider;
