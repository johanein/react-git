import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Bar } from "react-chartjs-2";

const checkProps = (prevProps,nextProps) => {
    const { data, options } = prevProps || {}
    const { data:nextData, options:nextOptions } = nextProps || {}
    return ((data === nextData) && (options === nextOptions))
  } 

const BarCharts = memo(({ data, options }) => {
    return <Bar data={data} options={options} />;
  },checkProps);

BarCharts.propTypes = {
    data: (PropTypes.object | PropTypes.func).isRequired,
    options: PropTypes.object,
  };

export default BarCharts
