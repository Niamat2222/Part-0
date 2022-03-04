import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const title = 'Superadvanced web phonebook app'
  const contacts = [
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    }
  ]

  return (
    <div>
      <header title={title} />
      <contents contacts={contacts} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)





ReactDOM.render(<App />, document.getElementById('root'))



