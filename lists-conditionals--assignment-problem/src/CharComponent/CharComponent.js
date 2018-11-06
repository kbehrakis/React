import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return (
          <div onClick={props.clicked}>
              {props.character}
          </div>
      );
}

export default charComponent;
