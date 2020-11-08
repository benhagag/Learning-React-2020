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
// withClass is a function that return a functional component that is why we don't need to use uppercase
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';


import Assigment1 from '../components/Assigment1/Assigment1';
import Assigment2 from '../components/Assigment2/Assigment2';


class App extends Component {

  /*
    If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
    The constructor for a React component is called before it is mounted.
    When implementing the constructor for a React.
    Component subclass, you should call super(props) before any other statement
    Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  */
  constructor(props){
    // super(props) in the constructor - for getting the props of component that we are extending
    super(props);
    console.log('[App.js] constructor');
  }

  // state - object that is managed from inside the Class Component.
  state = {
    persons: [
      { id:1, name: 'Ben', age: 28},
      { id:2, name: 'Amitt', age: 27},
      { id:3, name: 'Yoni', age: 30}
    ],
    showPersons: false,
    otherState: 'Some other data',
    showCokpit: true,
    changeCounter: 0
  }

  /*
    getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates.
    It should return an object to update the state, or null to update nothing.
    DO: Sync State to Props (just update state by the props we get)
    Don't: Cause Side-Effects(Like call a HTTP reauest to server)
  */
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  /*
    The componentDidMount() method runs after the component output has been rendered to the DOM.
    This is a good place to set up a timer
  */
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  /*
    * shouldComponentUpdate()  - allow us to cancel the updating process
    * decide whethe or not React should continue evaluating and re-rendering the component
    * Don't cause side-Effects!
    * return TRUE/FALSE
    * Update LifeCycle Hook
  */
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }


  /*
    * componentDidUpdate() - after the render method has been excuted
    * DO: Cause side-effects
    * DON't: Udate State (Because it triggers re-render)
    * Update LifeCycle Hook
    * componentDidUpdate()- Get data from getSnapshotBeforeUpdate()
  */
  componentDidUpdate(prevProps, prevState){
    console.log('[App.js] componentDidUpdate');
    // console.log(snapshot);
  }

  /*
    UNSAFE_componentWillMount() is invoked just before mounting occurs.
    It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering.
    Generally, we recommend using the constructor() instead for initializing state.

    Avoid introducing any side-effects or subscriptions in this method. 
    For those use cases, use componentDidMount() instead.

  */
  // UNSAFE_componentWillMount (){
  //   console.log('[App.js] componentWillMount');
  // }

  /*
  * getSnapshotBeforeUpdate() - Changing the DOM in the last minute
  * DO: Last-minute DOM ops
  * Don't: Cause side-effects 
  */
  // getSnapshotBeforeUpdate(prevProps, prevState){

  // }

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

    /*
     * In this way of using in this.setState we using prevState to update the state and not this.state it self
     * If we want to use something from this.state while usestate() this is the right way to do it - with prevState  
     * Super Important to remebr!
     */
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.prevState.changeCounter + 1
      };
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    console.log('[App.js] render');

    // In Inline CSS in JSX we omit the - (background-color->backgroundColor) 

    let persons = null;
    if (this.state.showPersons){
      persons = (
          <Persons
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler}
          />
      );
    }

    return (
      // StyleRoot - For apply Radium in all conponents that is renderd in App.js
      // <StyleRoot>
        // <div className={classes.App}>
        // <WithClass classes={classes.App}>
        <Auxiliary>
          <button 
            onClick={() => {this.setState({showCokpit: !this.state.showCokpit});}}
          >
            Remove Cockpit
          </button>
          {this.state.showCokpit ? 
            <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            />
            :
            null
          }
          {persons}
          <br />
          <br />
          <Animal />
          <hr />
          < Assigment1 />
          <hr /><br />
          < Assigment2 />
          </Auxiliary>
          // </WithClass>
        /* </div> */
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
// withclass(WrappedComponent, className) we pass to withclass function the App component and the classes names
export default withClass(App, classes.App);
