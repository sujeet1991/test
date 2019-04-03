import React from 'react';
import { Chart } from "react-google-charts";


const chart= React.memo(function MyComponent(props){
    console.log()
    const rateCurrencyNames = Object.keys(props.chartdata.rates);
    const rateCurrencyValues = Object.values(props.chartdata.rates);
   console.log(rateCurrencyNames);
    console.log(rateCurrencyValues);
    const chartData = [['x', 'dogs']]
    for (let i = 0; i < rateCurrencyNames.length; i += 1) {
        
      chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]]);
      
    }

  return (
    <div>
      <Chart
  width={'600px'}
  height={'105px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={chartData}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Popularity',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
  )
})
export default chart;


