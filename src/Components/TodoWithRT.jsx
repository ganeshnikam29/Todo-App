import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectInput, selectPriority, selectFilteredTodos } from "../selectors";
import {
  addTodo,
  changeInput,
  changePriority,
  deleteTodo,
  changeFilterValue,
  changeTodoStatus,
} from "../slice/TodoSlice";
import "./Todo.css";
import { TodoSelect } from "./TodoSelect";
import { Button } from "./Button";
import { TodoMeta } from "./TodoMeta";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { TbCircleChevronsDown, TbCircleChevronsUp } from "react-icons/Tb";

let nextid = 4;
export const TodoWithRT = () => {
   const todos = useSelector(selectFilteredTodos)
  const input = useSelector(selectInput);
  const priority = useSelector(selectPriority);
  const dispatch = useDispatch();

  return (
      <div className="to-do-container">
      <div className="add-todo-input">
        <input
          className="todo-input"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => dispatch(changeInput(e.target.value))}
        />
        <TodoSelect
          classNames="todo-select"
          onChangePriority={(value) => dispatch(changePriority(value))}
        />
        <Button
          classNames="primary"
          handleClick={() =>
            dispatch(
              addTodo({
                title: input,
                id: nextid++,
                done: false,
                priority,
              })
            )
          }
        >
          <AiOutlinePlus />
          Add Todo
        </Button>
      </div>
      
      <div className="filter-container">
        <label htmlFor="priority-filter" className="filter-label">
          Filter by Priority
        </label>
        <TodoSelect
          classNames="todo-select-filter"
          onChangePriority={(value) =>
            dispatch(changeFilterValue(value))
          }
          isFilter
        />
      </div>
      <TodoMeta todos={todos} />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="list-item">
              <input
                type="checkbox"
                onChange={(e) =>
                  dispatch(
                    changeTodoStatus({ status: e.target.checked, id: todo.id })
                  )
                }
              />
              <span
                className={!todo.done ? "todo-title" : "todo-title-strike"} // Conditional Rendering
              >
                {todo.title}
              </span>
              {todo.priority === "low" && (
                <TbCircleChevronsDown style={{ color: "#2ECC40" }} size="2em" />
              )}
              {todo.priority === "medium" && (
                <TbCircleChevronsDown style={{ color: "#FF8C00" }} size="2em" />
              )}
              {todo.priority === "high" && (
                <TbCircleChevronsUp style={{ color: " #FF4136" }} size="2em" />
              )}
              <Button
                classNames="secondary"
                handleClick={() => dispatch(deleteTodo(todo.id))}
              >
                <AiOutlineDelete />
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
