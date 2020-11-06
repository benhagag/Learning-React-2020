import React from 'react';

import Person from './Person/Person';

{/*.map() - will excute a method for each element in the array*/}
const persons = props => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
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
                click={() => props.clicked(index)}
                /*
                Annonymous function - that is excuted while the eventListener is trrigerd.
                Get the event while triggerd and than send the event to the nameChangedHandler

                */
                changed={(event) => props.changed(event,person.id)}
            />
        );
    });
};


export default persons;

