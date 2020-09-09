import React, { memo } from "react";
import PropTypes from "prop-types";
import LineChart from "./lineCharts";
import { lineData, lineOptions } from "./properties";
import styles from "./charts.module.css";

const Charts = memo((props) => {
  return (
    <div id={styles.charts}>
      <LineChart data={lineData} options={lineOptions} />
    </div>
  );
});

Charts.propTypes = {
  title: PropTypes.string,
};

export default Charts;
