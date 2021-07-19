import React from 'react';
import ExpensiveItem from './components/ExepenseItem';
import './components/ExpenseItem.css';

const App = () => {
  const expenses = [ { id: 1, title: 'Create a protection robot', amount: 399.99, date: new Date()},
                    { id: 2, title: 'Create an AI', amount: 107.02, date: new Date()},
                    { id: 3, title: 'Create a rocket ', amount: 205.02, date: new Date()},
                    { id: 4, title: 'Build a mars colony', amount: 907.02, date: new Date()},
                    { id: 5, title: 'Going to the moon', amount: 907.02, date: new Date()},
                    { id: 6, title: 'Travel to the universe', amount: 507.02, date: new Date()},
                    { id: 7, title: 'Travel to the universe on a starship', amount: 1000.00, date: new Date()}
]

  return (  
    <>
      <div>
        <h2>Let's get started!</h2>
        <div className='expanse-main__container'>
          <div className='expense-container'>
            <ExpensiveItem 
              data={ expenses }
            />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default App;