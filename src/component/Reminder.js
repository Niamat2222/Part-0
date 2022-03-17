import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [
        {
          name: 'Buy some eggs',
          timestamp: "2018-11-10T13:00:00.141Z"
        }
      ],
      newName: 'Buy some eggs'
    }
  }

  render() {
    return (
      <div>
        <h2>Reminders</h2>
      <form>
        <div>
            Name: <input />
        </div>

        <div>
            <button type="submit">Add</button>
        </div>
      </form>

          <h2>At time:</h2>

        <div>
          debug: {this.state.newName}
        </div>  
      </div>
    )
  }
}

export default App

