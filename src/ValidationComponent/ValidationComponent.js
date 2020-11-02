import React from 'react';

const validationComponent = props => {

    let errorValidtion = null;

    if(props.inputLength != 0){

        if(props.inputLength > 15){
            errorValidtion = 'The input text is too long, must be 15 characters or less';
        }else if(props.inputLength < 5){
            errorValidtion = 'The input text is too short, must be 5 characters at least';
        }

    }
   
    return(
        <div>
            <p>
                {errorValidtion}
            </p>
        </div>
    );


}

export default validationComponent;