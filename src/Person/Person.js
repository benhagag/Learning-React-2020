import React from 'react';
import './Person.css'

// Adding functional component

const person  = (props) => { // arrow function

    return (
        <div className="person">
            {/* 
                props - All the properties we use on the HTML JSX element.
                On Class component we will use props with this -> {this.props.name}
            */}
            <p 
                onClick = {props.click}
            >
                I'm {props.name} and I am {props.age} years old!
            </p>

            {/* prop.children - Take all the HTML or Text inside the HTML JSX Element.
                EXAMPLE:  <Person> Some text here.. </Person>
            */}
            <p>{props.children}</p>

            {/*
                props.change - function from App.js to pass the value of the input onchange for changing the state in App Component.
                props.name - value the name as it passed from App component.
                Two way binding - form App to person pass  avalue AND from person to App return a value onChange.

             */}
            <input type="text" onChange={props.change} value={props.name}></input>
            
        </div>
    );

}

export default person;