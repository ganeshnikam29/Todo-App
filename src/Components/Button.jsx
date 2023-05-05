import React from 'react';
import './Button.css';

export const Button = ({ message, children, handleClick, classNames }) => {
  return (
    <div onClick={() => console.log('Parent Clicked')}>
      <button
        className={classNames}
        onClick={(e) => {
          e.stopPropagation();
          console.log('Button Clicked');
          handleClick();
        }}
      >
        {children}
      </button>
    </div>
  );
};
