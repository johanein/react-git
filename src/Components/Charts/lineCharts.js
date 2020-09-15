import React, { memo } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const checkProps = (prevProps,nextProps) => {
  const { data, options } = prevProps || {}
  const { data:nextData, options:nextOptions } = nextProps || {}
  return ((data === nextData) && (options === nextOptions))
}

const LineCharts = memo(({ data, options }) => {
  return <Line data={data} options={options} />;
},checkProps);



LineCharts.propTypes = {
  data: (PropTypes.object | PropTypes.func).isRequired,
  options: PropTypes.object,
};

export default LineCharts;
