import React from 'react';
// HOC - Higher Order Components
// function that returns a functional component 
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* passing props to the WrappedComponent by spreading the props*/}
            <WrappedComponent {...props}/>
        </div>
    );  
}

export default withClass;