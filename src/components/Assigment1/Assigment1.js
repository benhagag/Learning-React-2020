import React, { Component } from 'react';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

class Assigment1 extends Component {

    // state - object that is managed from inside the Class Component.
    state = {
        userName: 'BenHagag',
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

    render(){

        const style = {

            display:'inline-block',
            width: '1000px',
            fontFamily: 'cursive',
            boxShadow: '5px 6px 4px 10px red'
        };

        return (

            <div style={style}>
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
        
        );
    }
}

export default Assigment1;