import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function CircularProgressBar({ dynamicValue }) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < dynamicValue) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, [percentage, dynamicValue]);
  const borderStyles = buildStyles({
    pathColor: '#635EA3',
    trailColor: '#d3d3d3',
    strokeLinecap: 'round',
    pathTransitionDuration: 0.5,
  });
//   console.log({...borderStyles},"hi inair");
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: 150 }}>
        <CircularProgressbar
        strokeWidth={16}
          value={percentage}
          text={`${percentage}%`}
          styles={{...borderStyles, text: { fontSize: '20px', fontWeight: '800', fill: '#635EA3' }}}
          />
      </div>
    </div>
  );
}
export default CircularProgressBar;