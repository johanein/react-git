import React, { memo } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const LineCharts = memo(({ data, options }) => {
  return <Line data={data} options={options} />;
});

LineCharts.propTypes = {
  data: (PropTypes.object | PropTypes.func).isRequired,
  options: PropTypes.object,
};

export default LineCharts;
