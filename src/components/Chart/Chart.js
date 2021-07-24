import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {
    const dataPointValue = dataPoints?.map( dataPoint => dataPoint.value )
    const totalMaximum = Math.max(...dataPointValue)

    return (  
        <>
            <div className="chart">
                { dataPoints?.map( (dataPoint) => {
                    //console.log(dataPoints, 'data individualy')
                    return (
                        <ChartBar
                            key={ dataPoint.id }
                            value={dataPoint.value}
                            maxValue={totalMaximum}
                            label={dataPoint.label}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Chart;