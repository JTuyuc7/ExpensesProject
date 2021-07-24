import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onSaveExpanseItem, onHideButton}) => {

    const saveExpenseHandler = ( expense ) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }
        onSaveExpanseItem( expenseData )
    }

    // function to hide the modal
    const hideModalRequst = () => {
        onHideButton()
    }

    return (  
        <>
            <div className="new-expense">
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseHandler}
                    onHideModalRequest={hideModalRequst}
                />
            </div>
        </>
    );
}

export default NewExpense;