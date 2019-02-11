import React, { Component } from 'react';
import './App.css';
import Persons from './../components/Persons/Persons'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Mstephanie', age: 26 }
    ],
    otherVal: 'some value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Mstephanie', age: 27 }
      ]
    });
  }

  togglePersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  onNameChange(value, index) {
    const persons = this.state.persons.slice();
    persons[index] = Object.assign({}, persons[index], { name: value });

    this.setState({ persons });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} changed={this.onNameChange.bind(this)} />;
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <header className="App-header">
          Hello world
        </header>
        <button style={style} onClick={this.togglePersons}>Toggle persons</button>
        {persons}
        <div className="Person">Hello</div>
      </div>
    );
  }
}

export default App;
