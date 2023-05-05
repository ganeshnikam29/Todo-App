import React from "react";
import "./Todo.css";

export const TodoMeta = ({ todos }) => {
  return (
    <div className="meta-data-container">
      <div className="todo-meta-data">
         <span className="low-priority">Low Priority: {todos.filter((todo) => todo.priority ==='low').length}</span>
         <span className="medium-priority">Medium Priority: {todos.filter((todo) => todo.priority ==='medium').length}</span>
         <span className="high-priority">High Priority: {todos.filter((todo) => todo.priority ==='high').length}</span>
      </div>
      <div className="todo-meta-data">
        <span>Todos: {todos.length}</span>
        <span>
          Completed Todo: {todos.filter((todo) => todo.done === true).length}
        </span>
      </div>
    </div>
  );
};
