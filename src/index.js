import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Reminders from "./component/Reminder.js";


const App = () => {
  const phonebook = {
    name: 'Superadvanced phonebook app',
    contacts: [
      {
        name: 'John Doe',
        phonenumber: '358401234567',
        id: 1
      },
      {
        name: 'Jane Doe',
        phonenumber: '44551234567',
        id: 2
      },
      {
        name: 'Foo bar',
        phonenumber: '000',
        id: 3
      },
    ]
  }

  return (
    <div>
      <h1 className='header'>{phonebook.name}</h1>

      {
        phonebook.contacts.map(numberitem => (
          <div className='numberItem' key={numberitem.id}>
            <h3 className='name'>Name: {numberitem.name}</h3>
            <span className='number'>
              <h3>Number:</h3>
              <h3>{numberitem.phonenumber}</h3>
            </span>
          </div>
        ))
      }
      <h3 className='h3'>{}Total number of entries: 3</h3>
      
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)





ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Reminders />, document.getElementById('root'))



