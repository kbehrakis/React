import React from 'react';
import UserInput from './UserInput';

const userOutput = (props) => {
    return (
      <div className="UserOutput">
          <p> Username: {props.username}, Password: {props.password}</p>
     </div>
    )
};

export default userOutput;
