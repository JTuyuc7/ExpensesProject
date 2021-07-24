import React from 'react';
import Chart from './Chart/Chart';

const ExpensesChart = ({dataPoints}) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Agu', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    /*for( const expense in dataPoints ){
        const expenseMonth = expense.date.getMonth(); // Since it is an array it start at 0 january is = 0
        console.log(expenseMonth)
        chartDataPoints[ expenseMonth ].value += expense.price; 
    }
*/
    dataPoints?.map( (expense) => {
        //console.log(expense)
        const expenseMonth = expense.date.getMonth()
        //console.log(expenseMonth)
        chartDataPoints[ expenseMonth ].value += expense.price
    })

    return (  
        <>
            <Chart
                dataPoints={chartDataPoints}
            />
        </>
    );
}

export default ExpensesChart;