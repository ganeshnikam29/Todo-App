import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TbCircleChevronsDown, TbCircleChevronsUp } from "react-icons/Tb";
import { TodoContext } from "../context";
import { Button } from "./Button";
import { TodoForm } from "./TodoForm";
import { TodoSelect } from "./TodoSelect";
import { TodoMeta } from "./TodoMeta";
import { UseContextInfo } from "./Info/useContextInfo";
import "./Todo.css";


export const TodoWithContext = () => {
  const { todos, deleteTodo, changeTodoStatus } = useContext(TodoContext);
  const [filterValue, setFilterValue] = useState("all");

  const filterState = () =>
    filterValue === "all"
      ? todos
      : todos.filter((todo) => todo.priority === filterValue);

  return (
    <main className="content">
      <div className="to-do-container">
        <TodoForm />
        <div className="filter-container">
          <label htmlFor="priority-filter" className="filter-label">
            Filter by Priority
          </label>
          <TodoSelect
            classNames="todo-select-filter"
            onChangePriority={(value) => setFilterValue(value)}
            isFilter
          />
        </div>
        <TodoMeta todos={todos} />
        <ul>
          {filterState().map((todo, index) => {
            return (
              <li className="list-item" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(e) => {
                    changeTodoStatus(e, todo.id);
                  }}
                />
                <span
                  className={!todo.done ? "todo-title" : "todo-title-strike"} // Conditional Rendering
                >
                  {todo.title}
                </span>
                {todo.priority === "low" && (
                  <TbCircleChevronsDown
                    style={{ color: "#2ECC40" }}
                    size="2em"
                  />
                )}
                {todo.priority === "medium" && (
                  <TbCircleChevronsDown
                    style={{ color: "#FF8C00" }}
                    size="2em"
                  />
                )}
                {todo.priority === "high" && (
                  <TbCircleChevronsUp
                    style={{ color: " #FF4136" }}
                    size="2em"
                  />
                )}
                <Button
                  handleClick={() => deleteTodo(todo.id)}
                  classNames="secondary"
                >
                  <span className="delete-label"> Detete</span>
                  <AiOutlineDelete />
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <UseContextInfo />
    </main>
  );
};
