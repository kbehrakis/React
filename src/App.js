import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {
  state = {
    users: [
      { username: 'kbehrakis', password: "jkjk" },
      { username: 'vmckd', password: "ksks" },
      { username: 'cooldude74', password: "djsoqq" }
    ],
  }

  usernameChangedHandler = (event) => {
  this.setState( {
    users: [
      { username: event.target.value, password: "jkjk" },
      { username: 'vmckd', password: "ksks" },
      { username: 'cooldude74', password: "djsoqq" }
    ]
  } )
}

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

      return (
        <div className="App">
          <h1 style={style}>Username and Password Info</h1>

          <UserInput
            changed={this.usernameChangedHandler}
            username={this.state.users[0].username} />

          <UserOutput
            username={this.state.users[0].username}
            password={this.state.users[0].password}/>

          <UserOutput
            username={this.state.users[1].username}
            password={this.state.users[1].password}/>

          <UserOutput
            username={this.state.users[2].username}
            password={this.state.users[2].password}/>

        </div>
      );
    }
  }

  export default App;
