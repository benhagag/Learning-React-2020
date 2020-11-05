import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

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
            <h1>Hi, I am a React app</h1>
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