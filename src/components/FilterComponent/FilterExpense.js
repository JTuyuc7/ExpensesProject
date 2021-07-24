import React from 'react';
import './FilterExpense.css';

const FilterExpense = ({onYearSelected, selected}) => {

    const yearHandler = (e) => {
        //console.log(e.target.value, 'value selected')
        onYearSelected(e.target.value)
    }

    return (  
        <>
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label>Filter by year</label>
                    <select
                        onChange={ yearHandler }
                        value={selected}
                    >
                        <option value=''>Pick a year</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default FilterExpense;