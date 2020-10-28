import React from 'react';

const userInput = (props) => {

    const styleInput = {
        width: "15%",
        borderRadius: "50px",
        fontSize: "20px",
        color: "red",
        borderColor: "orange"
    }

    return(
        <div>
            <input style={styleInput} type="text" onChange={props.change} value={props.value}></input>
        </div>
    )


}

export default userInput;