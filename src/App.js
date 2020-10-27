import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // state - object that is managed from inside the Class Component.
  state = {
    persons: [
      { name: 'Ben', age: 28},
      { name: 'Amit', age: 27},
      { name: 'Yoni', age: 30}
    ],
    otherState: 'Some other data'
  }

  /* 
    we store function in a variable and then use this method on event listener without -> ().
    because we don't want to execute the method while rendering the HTML.
    we want it to be executed only when the event listener is triggered.
  */
  switchNameHandler = () => {
    /*
     this.setState  - we will use it for overwite data.
     it will update the object we want to change that already exists in state.
    */
    this.setState({
      persons: [
        { name: 'Ben Hagag', age: 28},
        { name: 'Amit', age: 27},
        { name: 'Yoni', age: 30}
      ],
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>

 
        <button onClick={this.switchNameHandler}>Switch Name</button>

        {/* Adding properties to the Person component */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Gaming </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
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

export default App;
