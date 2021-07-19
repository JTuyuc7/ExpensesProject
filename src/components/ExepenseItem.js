import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpensiveItem = ( props ) => {

    const {
        data
    } = props;

    var [ info, setInfo ] = useState( data )
    const [ filterData, setFilterData ] = useState('');

    var filterDataMap = info.filter( (element) => {
        //console.log(element.title)
        for( let i = 0; i <= filterData.length; i++){
            //console.log(filterData.toLowerCase().trim(), "inside the fuction to filter")
            if( element.title.toLowerCase()[i] === filterData.toLowerCase()[i]){
                //console.log(filterData.toLowerCase()[i], "info del map?")
                return element 
            }
        }
    })

    if( filterDataMap.length === 0 ){
        filterDataMap = info
    }

    const renderText = () => {
        return(
            <>
                
                { filterDataMap?.map( (item) => {
                    //console.log(filterDataMap, "Info if the finder is not loading")
                    return (
                        <div >
                            <div className="expense-item" key={item.id}>
                                <ExpenseDate data={item} />

                                <div className="expense-item__description">
                                    <h2>{item.title}</h2>

                                    <div className="expense-item__price">{item.amount}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (  
        <>
            <div className="finder-container">
                <input
                    type="text"
                    value={ filterData }
                    onChange={ (e) => setFilterData(e.target.value) }
                    name="filter"
                />

                <label className="find-label">Find an Expense</label>
            </div>
            { renderText() }
        </>
    );
}
 
export default ExpensiveItem;

//8781261227