import React, { Component } from 'react';
import Validation from '../Validation/Validation';
import Char from '../Char/Char';

class Assigment2 extends Component {

    // state - object that is managed from inside the Class Component.
    state = {
        otherState: 'Some other data',
        inputValue: ''
    }

    inputLengthHandler = (event) => {
        this.setState({
          inputLength:event.target.value.length,
          inputValue:event.target.value
        })
    }

    clearInputValue = index =>{
        // split('') - convert string into an array
        let value = this.state.inputValue.split('');

        // splice() - remove slice from an array
        value.splice(index, 1);

        // join('') - array of characters into string
        value = value.join('');

        this.setState({
        inputValue:value
        })

    }
    

    render(){

        let letters = (
            <div>
                {/* split('') -> will convert string into array */}
                {this.state.inputValue.split('').map((letter, index) => {
                    return <Char letter = {letter} key={index} click={()=> this.clearInputValue(index)} />
                })}
            </div>
        );

        const style = {
            display:'inline-block',
            width: '1000px',
            fontFamily: 'cursive',
            boxShadow: '5px 6px 4px 10px red'
        };


        return (

            <div style={style}>
                <h1>Assigment # 2</h1>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <br />
                <input type="text" value={this.state.inputValue} onChange={(event) => this.inputLengthHandler(event)}/>
                <p>{this.state.inputValue}</p>
                <p>The length of the of the value in the input above is : {this.state.inputValue.length}</p>
                <h2>ValidationComponent Component</h2>
                <Validation inputLength={this.state.inputValue.length}/>
                <h2>Char componenet</h2>
                {letters}
            </div>
        
        );
    }
}

export default Assigment2;