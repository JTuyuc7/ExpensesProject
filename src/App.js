import React, { useState } from 'react';
import ExpensiveItem from './components/ExepenseItem';
import './components/ExpenseItem.css';
import NewExpense from './components/NewExpense/NewExpense';
import FilterExpense from './components/FilterComponent/FilterExpense';
import ExpensesChart from './components/ExpensesChart';

const initialState = [ 
  { id: 1, title: 'Create a protection robot', price: 399.99, date: new Date(2020, 2, 11 )},
  { id: 2, title: 'Create an AI', price: 107.02, date: new Date(2019, 10, 29)},
  { id: 3, title: 'Create a rocket ', price: 205.02, date: new Date(2020, 3, 15)},
  { id: 4, title: 'Build a mars colony', price: 907.02, date: new Date(2019, 11, 1)},
  { id: 5, title: 'Going to the moon', price: 907.02, date: new Date(2020, 12, 25)},
  { id: 6, title: 'Travel to the universe', price: 507.02, date: new Date(2018, 1, 19)},
  { id: 7, title: 'Travel to the universe on a starship', price: 1000.00, date: new Date(2020, 10, 16)}
]

const App = () => {

  //State to filter by date
  const [ filter, setFilter ] = useState('');
  const [ expenses, setExpenses ] = useState(initialState);
  const [ showForm, setShowForm ] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses([ expense, ...expenses ])
    setShowForm(false)
  }

  const selectedYearHandler = ( year ) => {
    setFilter(year)
  }
  
  const newExpensesFiltered = expenses.filter( (expense) => {
    const tempDate = expense.date.toLocaleString( 'en-US', { weekday: 'long', day: '2-digit', year: 'numeric', month: 'long'})
    const newDate = new Date( tempDate ).getFullYear()
    if( newDate.toString() === filter.toString()){
      return expense
    }
  })

  var newData = []
  if( filter === ''){
    newData = expenses
  }else {
    newData = newExpensesFiltered
  }

  const addNewExpenseHandler = () => {
    setShowForm(true)
  }

  const hideButtonHandler = () => {
    setShowForm(false)
  }

  return (  
    <>
      <div>
        <div className='expanse-main__container'>
          <div className='expense-container'>
              { showForm ? (
                <NewExpense  
                onSaveExpanseItem={addExpenseHandler}
                onHideButton={hideButtonHandler}
              />
              ) : (
                <div className="new-expense-button">
                  <button
                    onClick={ addNewExpenseHandler }
                  >Add Expense</button>
                </div>
              ) }
              <div>
                <FilterExpense
                  selected={filter}
                  onYearSelected={selectedYearHandler}
                />

                <ExpensesChart
                  dataPoints={newData}
                />

                { newData.length === 0 ? (<p className="text-no-found">No expenses for the selected year</p>) : null }
              </div>
              { newData?.map( (expense) => (
                <ExpensiveItem
                  key={expense.id}
                  expense={expense}
                />
              ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
 
export default App;