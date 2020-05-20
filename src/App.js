import React, { Component } from 'react';
import classes from './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'A', name: 'Max', age: 28 },
      { id: 'B', name: 'Manu', age: 29 },
      { id: 'C', name: 'Lester', age: 26 }
    ]
  } 

  handleDeletePerson = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  handleNameChanged = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {person: persons} )

  }

  handleTogglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.handleDeletePerson(index)}
            name={person.name}
            age={person.age}
            key={person.id} 
            changed={(event) => this.handleNameChanged(event, person.id)}/>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>It's really working!</p>
        <button 
          className={classes.button}
          alt={this.state.showPersons}
          onClick={() => this.handleTogglePersons("Maximillian!!")}>Hide Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default App;
