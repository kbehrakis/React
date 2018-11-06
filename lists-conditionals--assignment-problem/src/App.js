import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import ValidateComponent from './ValidateComponent/ValidateComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    users: [
      { username: 'kbehrakis', password: "jkjk" }
    ],
  }

  usernameChangedHandler = (event) => {
    this.setState( {
      users: [
        { username: event.target.value, password: "jkjk" },
      ]
    } )
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const newText = text.join('');
    this.setState({
      users:[
        {username: newText, password:"jkjk"}
      ]
    })
  }

  render () {
      const charList = this.state.users[0].username.split('').map((char, index) => {
        return <CharComponent character={char}
                              key={index}
                              clicked={() => this.deleteCharHandler(index)} />;
      });

      return (
        <div className="App">
          <h1>Username and Password Info</h1>

          <UserInput
            changed={this.usernameChangedHandler}
            username={this.state.users[0].username} />

          <ValidateComponent
            textLength={this.state.users[0].username.length}/>

          {charList}

          <UserOutput
            username={this.state.users[0].username}
            password={this.state.users[0].password}/>
        </div>
      );
    }
  }

  export default App;
