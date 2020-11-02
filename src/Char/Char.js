import React from 'react';

// Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).

const char = props =>{

    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }

    return(
        <div style={style} onClick={props.click}>
            {props.letter}
        </div>
    );

}

export default char;