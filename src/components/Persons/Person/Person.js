import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
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

    constructor(props){
        // always when we add a costructor add super first!
        super(props);
        // Getting any refernces object React gives me
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        // this.inputElement.focus();

        //Using current.focus with React.createRef() 
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] rendering...');

        return (
            // Auxiliary(aux) - Return one expression and by using that we can return multiple elements instead a div that inside it has children elemnts

            //Fragment does the sime as the const aux we created wraping all and allow us to return multiple elements
            <Auxiliary>
                {
                this.props.isAuth
                ?
                <p> Authenticated!</p>
                : 
                <p>Please log in</p>
                }
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
                <input
                    type="text"
                    /*
                     * Special property we can use in all elements
                     * Adding new property to the class by using this.NamdOfVariable
                     * After using it as a global property we can use it anywhere in our application
                     * Using this in Class component only
                     * Older approach
                    */
                    // ref={(inputEl)=>{this.inputElement = inputEl}}
                    /*
                    * inputElementRef - holds the React.createRef()
                    * Newer approach
                    */
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            {/* </div>     */}
            {/* // </div> */}
            </Auxiliary>
        );

    }

};

// defining  the props and their type in case fro example we want to share our project with other developers
Person.propTypes = {
    click: PropTypes.func, // data type pointer for a function
    name: PropTypes.string, // data type string
    age: PropTypes.number, // data type number
    changed: PropTypes.func // data type pointer for a function
};

export default withClass(Person, classes.Person);