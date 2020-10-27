import React from 'react';

// Adding functional component

const person  = (props) => { // arrow function

    return (
        <div>
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
            
        </div>
    );

}

export default person;