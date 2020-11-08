import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    /*
      * useEffect() - Passing a function to useEffect() and this wil excute for every render cycle
      * It is componentDidMount and componentDidUpdate combined in one effect
      * For ccontrolling useEffect and excute it by specifiec render we will pass to it a second argument array
      * In That second argument array we will put the data we want to excute the useEffect
    */
    // useEffect(()=>{
    //     console.log('[Cockpit.js] useEffect on changing persons');
    //     // Http request..
    //     setTimeout(()=>{
    //         alert('Saved data to cloud!');
    //     },1000);
    // //  [props.persons] - In case props.persons has been change we will excute useEffect()
    // }, [props.persons]);

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect on first time render');
        // Http request..
        setTimeout(()=>{
            alert('Saved data to cloud!');
        },1000);
        /*
        * anonimos function for cleanupwork
        * we can compare it to - componentWillUnmount() - Using that hook before the Component is removed from the virtual DOM. 
        */
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };  
    //  [] - In case empty array (no dependecies) it will excute while the component will be rendered in the first time only AND will never excute again
    }, []);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        /*
        * anonimos function for cleanupwork
        * we can compare it to - componentWillUnmount() - Using that hook before the Component is removed from the virtual DOM. 
        */
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };  
    // no dependecies - it will excute each time the component render and re-render
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