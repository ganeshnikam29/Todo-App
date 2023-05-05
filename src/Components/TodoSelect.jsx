import React from "react";

export const TodoSelect = ({ classNames, onChangePriority, isFilter= false }) => {
  return (
    <select
      id={isFilter ? 'priority-filter': ''}
      className={classNames}
      onChange={(e) => onChangePriority(e.target.value)}
    >
      {isFilter && <option value="all">All</option> }
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};
