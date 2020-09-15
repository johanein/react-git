import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from "react-chartjs-2";

const checkProps = (prevProps,nextProps) => {
    const { data, options } = prevProps || {}
    const { data:nextData, options:nextOptions } = nextProps || {}
    return ((data === nextData) && (options === nextOptions))
  } 

const DoughnutChart = memo(({ data, options }) => {
    return <Doughnut data={data} options={options} />;
  },checkProps);

DoughnutChart.propTypes = {
    data: (PropTypes.object | PropTypes.func).isRequired,
    options: PropTypes.object,
}

export default DoughnutChart
