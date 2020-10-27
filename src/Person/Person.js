import React from 'react';

// Adding functional component

const person  = (props) => { // arrow function
    /*  props - All the properties we use on the HTML JSX element.
        On Class component we will use props with this -> {this.props.name}
    */

    return <p>I'm {props.name} and I am {props.age} years old!</p>

}

export default person;