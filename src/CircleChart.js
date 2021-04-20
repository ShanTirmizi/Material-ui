import React from 'react'
import './CircleChart.css'

const CircleChart = () => {
    return (
<div className="flex-wrapper">
  <div className="single-chart">
    <svg  fill="transparent" viewBox="0 0 36 36" className="circular-chart orange">
      {/* <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      /> */}
      <path className="circle"
        stroke-dasharray="90, 100"
        // width="190px"
        stroke-width="3"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">90%</text>
    </svg>
  </div>
</div>
    )
}

export default CircleChart
