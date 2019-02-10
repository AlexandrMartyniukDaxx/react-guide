import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Mstephanie', age: 26 }
    ],
    otherVal: 'some value'
  }

  switchNameHandler = (newName) => {
    console.log('button clicked', this.state);
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Mstephanie', age: 27 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello world
        </header>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Max!')}/>
        <Person name="Manu" age="22">My hobby is racing</Person>
        <Person name="Stephanie" age="21" />
      </div>
    );
  }
}

export default App;
