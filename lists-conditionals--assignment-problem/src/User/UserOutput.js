import React from 'react';
import UserInput from './UserInput';

const userOutput = (props) => {
    return (
      <div className="UserOutput">
          <p> Length: {props.username.length}</p>
     </div>
    )
};

export default userOutput;
