import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  // state - object that is managed from inside the Class Component.
  state = {
    persons: [
      { name: 'Ben', age: 28},
      { name: 'Amitt', age: 27},
      { name: 'Yoni', age: 30}
    ],
    otherState: 'Some other data',
    userName: 'BenHagag'
  }

  /* 
    # assigment numer #1
    pass userNameChangeHandler to UserInput
    and get back the value from the input onChange
  */
  userNameChangeHandler = (event) =>{
    this.setState({
      userName:event.target.value
    })
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
    console.log(this.state);
  }

  /*
    Binding between Components - 
    Passing the function by references between components as porperty.
    in the other side use it by props.
    use the event we get from the eventlistener
  */
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ben Gala", age: 28},
        { name: event.target.value, age: 27},
        { name: 'Yoni', age: 30}
      ],
    });
    console.log(this.state);
  }

  render() {

    // In Inline CSS in JSX we omit the - (background-color->backgroundColor) 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      pading: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>

 
        <button
          /* 
            Using arrow function for passing values to the function.
            Important to know - this is any Annonymous function that will be excuted onclick
            and will return the result of the function that inside the Annonymous function.
            # Better way to do it with .bind(this, value). #
          */
          onClick={() => this.switchNameHandler("Shimon")}
          style={style}
        >
          Switch Name
        </button>

        {/* Adding properties to the Person component */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          /* 
            Passing Method references between components with props
            Using bind for passing values to the function 
          */
          click={this.switchNameHandler.bind(this, "Zion")} 
          change={this.nameChangeHandler} 
        >
          My Hobbies: Gaming 
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
        <Animal />
        <hr></hr>
        <div id="assigment-1">
          <h1>Assigment # 1</h1>
          <ol>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
          <h2>UserInput Component</h2>
          <UserInput value={this.state.userName} change={this.userNameChangeHandler} />
          <h2>UserOutput Component</h2>
          <UserOutput userName={this.state.userName}/>
        </div>
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
