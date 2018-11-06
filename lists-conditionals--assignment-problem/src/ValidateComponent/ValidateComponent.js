import React from 'react';

const validateComponent = (props) => {
  let outputString = "This string is long enough.";

  if(props.textLength < 5){
    outputString = "This string is too short!"
  }
    return (
      <div className="ValidateComponent">
          <p>{outputString}</p>
     </div>
    )
};

export default validateComponent;
