import React, {useEffect, useRef} from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {

    const toggleBtnRef = useRef(null);

    /*
      * useEffect() - Passing a function to useEffect() and this wil excute for every render cycle
      * It is componentDidMount and componentDidUpdate combined in one effect - which means after it renders
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
        // setTimeout(()=>{
        //     alert('Saved data to cloud!');
        // },1000);

        /*
        * Use Ref Hook - useRef()
        */
        toggleBtnRef.current.click();

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
    
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
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
            ref={toggleBtnRef}
            >
            Toggle Persons
            </button>
            {/* AuthContext.Consumer -  Wraaping a function wehre we get the context argument
                And then this function returns the JSX code  
            */}
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
            
        </div>
    );

}

/*
 * React.memo() - store a snapshot of this component and only if its input changes, it will re-render it
 * And otherwise if its inputs do not change and some parent component want to update this component, React will give back that stored component
 * Great way of getting optimization for the functional components
 * We should wrap functional component that might not need update with every chnage in the parent component with React.memo ()
*/
export default React.memo(cockpit);