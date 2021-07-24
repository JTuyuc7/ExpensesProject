import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData, onHideModalRequest}) => {

    const [ expenseInfo, setExpenseInfo ] = useState({
        title: '',
        price: 0,
        date: ''
    })
    const { title, price, date } = expenseInfo;

    const handleChange = (e) => {
        setExpenseInfo({
            ...expenseInfo,
            [ e.target.name] : e.target.value
        })
    }

    const submitExpenseInfo = (e) => {
        e.preventDefault()
        
        const expenseData = {
            title :  title,
            price : price,
            date : new Date( date )
        }

        onSaveExpenseData(expenseData)

        // Resetear los campos
        setExpenseInfo({
            title: '',
            price: 0,
            date: ''
        })
    }

    // Function to hide the modal
    const onClickHandler = () => {
        onHideModalRequest()
    }

    return (  
        <>
            <div>
                <form
                    onSubmit={ submitExpenseInfo }
                >
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label htmlFor="title">Expanse Name</label>
                            <input
                                type="text"
                                placeholder="Expanse Name"
                                name="title"
                                id="title"
                                value={title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="price">Expanse Price</label>

                            <input
                                type="number"
                                name="price"
                                id="price"
                                min="0.001"
                                step="0.001"
                                value={ price }
                                onChange={handleChange}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="date">Expanse Date</label>

                            <input
                                type="date"
                                name="date"
                                id="date"
                                min="2018-01-01"
                                max="2022-01-01"
                                value={ date }
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button
                            onClick={ onClickHandler }
                        >Cancel</button>
                        <button
                            type='submit'
                        >Add Expense</button>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default ExpenseForm;