import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    /*
      * useEffect() - Passing a function to useEffect() and this wil excute for every render cycle
      * It is componentDidMount and componentDidUpdate combined in one effect
    */
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        // Http request..
    });

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;    
    }
    
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>  
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>React app is really working</p>
            <button
            // React throw a Warning for writing FALSE in the DOM so instead I'm using undefined.
            className={btnClass}
            onClick={props.clicked}
            >
            Toggle Persons
            </button>
        </div>
    );

}

export default cockpit;