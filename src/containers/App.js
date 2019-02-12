import React, { Component } from 'react';
import './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';

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

  deletePerson = (ind) => {
    const persons = [...this.state.persons];
    persons.splice(ind, 1);
    this.setState({ persons });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} changed={this.onNameChange.bind(this)} click={this.deletePerson} />;
    }

    return (
      <div className="App">
        <Cockpit persons={this.state.persons} open={this.state.showPersons} click={this.togglePersons.bind(this)} />
        {persons}
      </div>
    );
  }
}

export default App;
