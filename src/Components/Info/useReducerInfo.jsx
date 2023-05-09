import React from "react";

export const UseReducerInfo = () => {
  return (
    <div className="info-container">
      <h3 className="info-header">useReducer Hook</h3>
      <p>
        <ul>
          <li className="content-list-item">
            <b>useReducer</b> is another built-in React Hook that allows you to manage more complex state 
            in a functional component.
          </li>
          <li className="content-list-item">
            <b>useReducer</b>  takes a reducer function and an initial state value as arguments 
            and returns an array containing the current state value and a dispatch function to update the state value.
          </li>
          <li className="content-list-item">
            <b>useReducer</b>  is suitable for managing state that requires complex logic and multiple actions to update.
          </li>
        </ul>       
      </p>
    </div>
  );
};
