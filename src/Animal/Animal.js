import React, {useState} from 'react';

const animal  = props => { // arrow function
    /*
        useState - returns an array with 2 elements!
        The first one - will be the current state.
        The second one - will be a function that allow us to update the state.
    */
    const [animalsState, setAnimalState] = useState({
        animals: [
            {name: 'Rexi', type: 'Dog'},
            {name: 'Boni', type: 'Cat'},
            {name: 'Don', type: 'Rabit'},
        ],
    });

    const [otherStateText, setOtherState]  = useState({otherStateText : 'Some text from other text'});

    console.log(animalsState, otherStateText);

    const switchNameHandler = () => {
        /*
            On using React Hooks the function that update the state does not just overrwite the object in state it replace it!
            The meaning of this is that does not merge with old state, The solution for that is to use a multiple useState slices with difrent names.
            And by that we can update a specifiec part of state that we want. without change other part of the state. 
        */
        setAnimalState({
            animals: [
                {name: 'Candy', type: 'Dog'},
                {name: 'Boni', type: 'Cat'},
                {name: 'Golani', type: 'Rabit'},
            ]
        })
    }

    return (

    <div>
        <button onClick={switchNameHandler}>Switch Animal Name</button>
        <p>A {animalsState.animals[0].type} in a name {animalsState.animals[0].name}</p>
        <p>A {animalsState.animals[1].type} in a name {animalsState.animals[1].name}</p>
        <p>A {animalsState.animals[2].type} in a name {animalsState.animals[2].name}</p>
    </div>

    );

}

export default animal;