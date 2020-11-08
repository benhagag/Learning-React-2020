import React, {Component} from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
// import styled from 'styled-components';
import classes from './Person.css'


// Style Component(StyleDiv) - we will use it as component - because it returns a React Component
//styled. will return every element in HTML that we cann aplly CSS on it
// const StyleDiv = styled.div`
//     width :60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px){
//         width: 450px;
//     }
// `;


class Person extends Component {

    render(){
        console.log('[Person.js] rendering...');

        return (
            // Return one expression and by using that we can return multiple elements instead a div that inside it has children elemnts
            <Auxiliary>
            {/* // <div className="person" style={style}> */}
            {/* <div className={classes.Person}> */}
                {/* 
                    props - All the properties we use on the HTML JSX element.
                    On Class component we will use props with this -> {this.props.name}
                */}
                <p 
                    onClick = {this.props.click}
                >
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
    
                {/* prop.children - Take all the HTML or Text inside the HTML JSX Element.
                    EXAMPLE:  <Person> Some text here.. </Person>
                */}
                <p>{this.props.children}</p>
    
                {/*
                    props.change - function from App.js to pass the value of the input onchange for changing the state in App Component.
                    props.name - value the name as it passed from App component.
                    Two way binding - form App to person pass  avalue AND from person to App return a value onChange.
    
                 */}
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            {/* </div>     */}
            {/* // </div> */}
            </Auxiliary>
        );

    }

};

export default Person;