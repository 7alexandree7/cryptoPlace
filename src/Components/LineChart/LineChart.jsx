import { useEffect, useState } from 'react';
import './LineChart.css';
import { Chart } from 'react-google-charts'

const LineChart = ({ historicalData }) => {

    const [data, setData] = useState([['Date', 'Price']]);

    useEffect(() => {
        let chartDataCopy = [['Date', 'Price']];
        if (historicalData.prices) {
            historicalData.prices.map((item) => {
                chartDataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
            })
            setData(chartDataCopy);
        }
    }, [historicalData]);

    return (
        <Chart
            chartType='LineChart'
            data={data}
            height='100%'
        />
    )
}

export default LineChart
