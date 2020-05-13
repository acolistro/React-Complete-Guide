import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Lester', age: 26 }
    ]
  });

  const handleSwitchName = () => {
    // console.log('was clicked!');
    setPersonsState({    
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Lester', age: 45 }
      ] 
    });
  };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={handleSwitchName}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'));
  }

export default app;


//Object oriented approach code
// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Lester', age: 26 }
//   ]
// } 


