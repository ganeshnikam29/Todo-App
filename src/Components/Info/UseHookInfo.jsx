import React from "react";

export const UseHookInfo = () => {
  return (
    <div className="info-container">
      <h3 className="info-header">useState Hook</h3>
      <ul>
          <li className="content-list-item">
            <b>useState</b> is a built-in React Hook that allows you to manage
            state in a functional component.
          </li>
          <li className="content-list-item">
            <b>useState</b> takes an initial state value as an argument and returns an array
            containing the current state value and a function to update the
            state value
          </li>
          <li className="content-list-item">
            <b>useState</b> is suitable for managing simple state values that
            don't require complex logic or updates.
          </li>
        </ul>       
    </div>
  );
};
