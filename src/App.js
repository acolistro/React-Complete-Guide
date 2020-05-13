import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Lester', age: 26 }
    ]
  } 

  handleSwitchName = (newName) => {
    // console.log('was clicked!');
    this.setState({    
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Lester', age: 45 }
      ] 
    });
  }

  handleNameChanged = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Lester', age: 45 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
        style={style}
        onClick={() => this.handleSwitchName("Maximillian!!")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.handleSwitchName.bind(this, 'Max!')}
        changed={this, this.handleNameChanged}>My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default App;
