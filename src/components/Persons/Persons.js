import React, {PureComponent} from 'react';

import Person from './Person/Person';

/*
 * PureComponent is a normal component that already implements shouldComponentUpdate() with a complete props check
 * So that checks for any changes in any prop of that component
 * It is good for saving code and not needing to copare manually each prop
*/
class Persons extends PureComponent {

    state = {
        something:"something"
    }

    /*
    * getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates.
    * It should return an object to update the state, or null to update nothing.
    * DO: Sync State to Props (just update state by the props we get)
    * Don't: Cause Side-Effects(Like call a HTTP reauest to server)
    * Creation LifeCycle Hook
    */
    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }


    /*
    * UNSAFE_componentWillReceiveProps() is invoked before a mounted component receives new props.
    * If you need to update the state in response to prop changes (for example, to reset it), you may compare this.
    * props and nextProps and perform state transitions using this.setState() in this method.
    * Not in use anymore in React 17 and above.
    */
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }


    /*
    * shouldComponentUpdate()  - allow us to cancel the updating process
    * decide whethe or not React should continue evaluating and re-rendering the component
    * Don't cause side-Effects!
    * return TRUE/FALSE
    * Update LifeCycle Hook
    */
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');

    //     /*
    //      * Optimize for preventing rendering Persons component when there is no need for that
    //      * So now it Person component will be rendered only if Persons is changed
    //      * 
    //      * Array and Objects are reference types
    //      * We compare here the potiner between (nextProps.persons !== this.props.persons)
    //      * 
    //      * If we compare ALL the props we get  - Then there is an easier way to do it with PureComponent
    //      */
    //     if( nextProps.persons !== this.props.persons 
    //         || 
    //         nextProps.changed !== this.props.changed
    //         ||
    //         nextProps.clicked !== this.props.clicked
    //     ){
    //         return true;
    //     }else{
    //         return false;
    //     }
        
    // }

    /*
    * getSnapshotBeforeUpdate() - Changing the DOM in the last minute
    * DO: Last-minute DOM ops
    * Don't: Cause side-effects 
    * Update LifeCycle Hook
    * getSnapshotBeforeUpdate() - it is like a data package which we can receive in componentDidUpdate()
    *  so we can save some state right before the update, and then we can use it to update the DOM again
    */
    getSnapshotBeforeUpdate(prevProps, prevState){
         console.log('[Persons.js] getSnapshotBeforeUpdate');

         return {message: 'SnapShot!'};
    }

    /*
    * UNSAFE_componentWillUpdate() is invoked just before rendering when new props or state are being received.
    * Use this as an opportunity to perform preparation before an update occurs. 
    * This method is not called for the initial render.
    * NOT in use anymore! 
    */
    // componentWillUpdate(){

    // }

    /*
    * componentDidUpdate() - after the render method has been excuted
    * DO: Cause side-effects
    * DON't: Udate State (Because it triggers re-render)
    * Update LifeCycle Hook
    * componentDidUpdate()- Get data from getSnapshotBeforeUpdate()
    */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    /*
     * componentWillUnmount() - Using that hook before the Component is removed from the virtual DOM.
     * 
     * 
     * 
    */
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){

        console.log('[Persons.js] rendering...');
        // {/*.map() - will excute a method for each element in the array*/}
        return this.props.persons.map((person, index) => {
            // React allow us to return an array of adjcent elements al long the have a key
            return (
                <Person
                    // Adding properties to the Person component
                    name={person.name}
                    age={person.age}
                    /*
                    key- to put something unique.
                    Keys help React identify which items have changed, are added, or are removed.
                    Keys should be given to the elements inside the array to give the elements a stable identity.
                    
                    */
                    key={person.id}
                    /* 
                    Using arrow function for passing values to the function.
                    Important to know - this is any Annonymous function that will be excuted onclick
                    and will return the result of the function that inside the Annonymous function.
                    # Better way to do it with .bind(this, value). #
                */
                    click={() => this.props.clicked(index)}
                    /*
                    Annonymous function - that is excuted while the eventListener is trrigerd.
                    Get the event while triggerd and than send the event to the nameChangedHandler
    
                    */
                    changed={(event) => this.props.changed(event,person.id)}
                />
            );
        });

    }
}

export default Persons;

