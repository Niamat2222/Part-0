import React from 'react';
import "./Reminder.css";

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
      newName: 'Make omelette'
    }
  }

  render() {
    return (
      <div>
        <h2>Add Reminders</h2>
      <form>
        <div>
            Name: <input/>
        </div>

        <div>
            <button type="submit">Add</button>
        </div>
      </form>

          <h2>Reminders</h2>
          <p>Buy some eggs</p>
          <p>Make omelette</p>

        <div>
          Debug: {this.state.newName}
        </div>  
        
        <div>
      <form>
        <div>
            Name: <input />
        </div>

        <div>
            Date: <input />
        </div>

        <div>
            <button type="submit">Add</button>
        </div>
      </form>
      
        </div>
      </div>
    )
  }
}

export default App

