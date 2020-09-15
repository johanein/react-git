import React, { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import LineCharts from "./lineCharts";
import BarCharts from "./barCharts";
import DoughnutChart from "./doughnutChart";
import { lineData, lineOptions ,barData, barOptions, doughnutData, doughnutOptions} from "./properties";
import styles from "./charts.module.css";

const Charts = memo((props) => {
  const [chart, setchart] = useState('line')
  const chartArray = ['line','bar','doughnut']
  const chartElements = useCallback(() => {
     switch (chart) {
      case 'line':{       
        return <LineCharts data={lineData} options={lineOptions} /> 
    }
      case 'bar':{       
        return <BarCharts data={barData} options={barOptions} />
    }
      case 'doughnut':{       
        return <DoughnutChart data={doughnutData} options={doughnutOptions} />
    }
      default:
        break;
    }
  },[chart])
  
  return (
    <div id={styles.charts}>
      <>
      <label for="chart">Choose a chart:</label>
<select name="chart" id="chart" onChange={(e)=>{setchart(e.target.value)}}>  
  {chartArray.map(name=><option value={name}>{name}</option>)}
</select>
      </>
      {chartElements()}
    </div>
  );
});

Charts.propTypes = {
  title: PropTypes.string,
};

export default Charts;
