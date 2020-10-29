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
      { id:1, name: 'Ben', age: 28},
      { id:2, name: 'Amitt', age: 27},
      { id:3, name: 'Yoni', age: 30}
    ],
    showPersons: false,
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
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

    let persons = null;

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
                    />
          })}

              {/* Passing Method references between components with props
              Using bind() for passing values to the function  */}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Toggle Persons
        </button>
        {persons}
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
