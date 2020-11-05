import React, { Component } from 'react';
// import styled from 'styled-components';
/*
  * CSS modules  - it will import all classes in CSS as peroperty in classes object -> classes.button
  * AND will write them in DOM by generated them to class name which allow us to use the CSS it self without using CSS modules, just regular CSS
*/
import classes from './App.css';
// import'./App.css';
// import Radium, {StyleRoot} from 'radium';

import Person from '../components/Persons/Person/Person';
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
    let buttonClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {/*.map() - will excute a method for each element in the array*/}
          {this.state.persons.map((person, index) => {
            return <Person
                     // Adding properties to the Person component
                     name={person.name}
                     age={person.age}
                     /*
                      key- to put something unique.
                      Keys help React identify which items have changed, are added, or are removed.
                      Keys should be given to the elements inside the array to give the elements a stable identity.
                      
                     */
                     key={person.id}
                     /* 
                      Using arrow function for passing values to the function.
                      Important to know - this is any Annonymous function that will be excuted onclick
                      and will return the result of the function that inside the Annonymous function.
                      # Better way to do it with .bind(this, value). #
                    */
                     click={() => this.deletePersonHandler(index)}
                     /*
                      Annonymous function - that is excuted while the eventListener is trrigerd.
                      Get the event while triggerd and than send the event to the nameChangedHandler

                     */
                     changed={(event) => this.nameChangeHandler(event,person.id)}
                    />
          })}

              {/*
                Passing Method references between components with props
                Using bind() for passing values to the function
                EXAMPLE: 
                <Person click={this.deletePersonHandler.bind(this,index)} />
              */}

        </div>
      );
     buttonClass = classes.Red;
    }
    
    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      // StyleRoot - For apply Radium in all conponents that is renderd in App.js
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hi, I am a React app</h1>
          <p className={assignedClasses.join(' ')}>React app is really working</p>
          <button
            // React throw a Warning for writing FALSE in the DOM so instead I'm using undefined.
            className={buttonClass}
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons
          </button>
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
