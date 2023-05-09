import React from "react";

export const UseContextInfo = () => {
  return (
    <div className="info-container">
      <h3 className="info-header">Use Context Hook</h3>
      <ul>
        <li className="content-list-item">
          <b>useContext</b> hook is used for passing data down the component
          tree without having to pass props through each level of the tree.
        </li>
        <li className="content-list-item">
          <b>useContext</b> provides a way to share data between components that
          are not directly related to each other.
        </li>
        <li className="content-list-item">
          <b>useContext</b> is used when you have data that needs to be accessed
          by many components in your application, for example,
          <i>
            user authentication status, theme settings, or language preferences.
          </i>
        </li>
      </ul>
    </div>
  );
};
