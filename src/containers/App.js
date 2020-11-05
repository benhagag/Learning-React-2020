import React, { Component } from 'react';
// import styled from 'styled-components';
/*
  * CSS modules  - it will import all classes in CSS as peroperty in classes object -> classes.button
  * AND will write them in DOM by generated them to class name which allow us to use the CSS it self without using CSS modules, just regular CSS
*/
import classes from './App.css';
// import'./App.css';
// import Radium, {StyleRoot} from 'radium';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Animal from '../components/Animal/Animal';


import Assigment1 from '../components/Assigment1/Assigment1';
import Assigment2 from '../components/Assigment2/Assigment2';


class App extends Component {

  // state - object that is managed from inside the Class Component.
  state = {
    persons: [
      { id:1, name: 'Ben', age: 28},
      { id:2, name: 'Amitt', age: 27},
      { id:3, name: 'Yoni', age: 30}
    ],
    showPersons: false,
    otherState: 'Some other data',
  }

  /* 
    we store function in a variable and then use this method on event listener without -> ().
    because we don't want to execute the method while rendering the HTML.
    we want it to be executed only when the event listener is triggered.
  */
  switchNameHandler = (newName) => {
    /*
     this.setState  - we will use it for overwite data.
     it will update the object we want to change that already exists in state.
    */
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Amit', age: 27},
        { name: 'Yoni', age: 30}
      ],
    });
  }

  deletePersonHandler = (personIndex) =>{
    /*
      create a copy of the state , changed that and then update the state.
      beacuase we want to update the state without mutating the original state first.
    */
    
    // -> slice create a new object array
    // const persons = this.state.persons.slice(); 

    // -> create new array with spreading the persons array inside - ES6 fteature.
    const persons = [...this.state.persons];

    // remove the elemnt in the place of index
    persons.splice(personIndex, 1);

    this.setState({
      persons:persons
    });
  }

  /*
    Binding between Components - 
    Passing the function by references between components as porperty.
    in the other side use it by props.
    use the event we get from the eventlistener
  */
  nameChangeHandler = (event, id) => {
    /*
      The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
      Otherwise, it returns -1, indicating that no element passed the test.
    */
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    
    // creating a new object by spreading the the object from persons[personIndex] 
    const person = {
      ...this.state.persons[personIndex]
    };

    // because we got a copy in person we dont maniplate the orignal state.
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    // In Inline CSS in JSX we omit the - (background-color->backgroundColor) 

    let persons = null;

    if (this.state.showPersons){
      persons = 
          <Persons
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}
          />
    }

    return (
      // StyleRoot - For apply Radium in all conponents that is renderd in App.js
      // <StyleRoot>
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
          <br />
          <br />
          <Animal />
          <hr />
          < Assigment1 />
          <hr /><br />
          < Assigment2 />
        </div>
      // </StyleRoot>
    );


    // ---- Behind the scene code of the JSX ----- 

    /*
      React JSX - using HTML in js file.
      Behind the scene - what it does it uses in a method  - 
      React.createElement('div',{className: App}, "The text I want to represent in the div");
      So JSX saves for us code to use and in the end it compiles to JS. 
      without JSX we would use React.createElement for each element we want to create nested in each other.
    */
    
    // Code example:
    
    // return React.createElement(
    //         'div', 
    //         {className: 'App'}, 
    //         React.createElement(
    //           'h1',
    //           null,
    //           'Hi, I am a React App'

    //         )
    //       );

    // ---- END Behind the scene code of the JSX ----- 
  }
}

// export default Radium(App);
export default App;
