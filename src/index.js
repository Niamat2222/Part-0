import React from 'react'
import ReactDOM from 'react-dom'

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
      }
    ]
  }

  return (
    <div>
      <phonebook phonebook={phonebook} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)




ReactDOM.render(<App />, document.getElementById('root'))



