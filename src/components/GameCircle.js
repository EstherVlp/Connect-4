import React from 'react';

const onClick = () => {
    alert("click here");
}

const GameCircle = ({id, children}) => {
  return (
    <div onClick={onClick}>
         {children};
    </div>
  )
}

export default GameCircle;