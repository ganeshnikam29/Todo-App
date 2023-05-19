import React from "react";
import { Button } from "./Button";
import { useZustandStore } from "../store/ZunstandStore";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { TbCircleChevronsDown, TbCircleChevronsUp } from "react-icons/Tb";
import { TodoSelect } from "./TodoSelect";
import { TodoMeta } from "./TodoMeta";

let nextId = 4;
export const ZustandDemo = () => {
  const {
    todos,
    input,
    priority,
    filterValue,
    changePriority,
    changeInputValue,
    changeFilterValue,
    addTodo,
    deleteTodo,
    changeTodoStatus
  } = useZustandStore((state) => state);
  console.log(filterValue);

  const handleAddTodo = () => {
    addTodo({ title: input, id: nextId++, done: false, priority: priority });
  };

  const filterState = () => {
    if (filterValue === "all") {
      return todos;
    } else {
      return todos.filter((todo) => todo.priority === filterValue);
    }
  };

  return (
    <main className="content">
      <div className="to-do-container">
        <div className="add-todo-input">
          <input
            className="todo-input"
            value={input}
            onChange={(e) => changeInputValue(e.target.value)}
            placeholder="Enter Todo"
          />
          <TodoSelect
            classNames="todo-select"
            onChangePriority={(value) => changePriority(value)}
          />
          <Button classNames="primary" handleClick={handleAddTodo}>
            <AiOutlinePlus />
            <span className="delete-label"> Add Todo </span>
          </Button>
        </div>
        <div className="filter-container">
          <label htmlFor="priority-filter" className="filter-label">
            Filter by Priority
          </label>
          <TodoSelect
            classNames="todo-select-filter"
            onChangePriority={(value) => changeFilterValue(value)}
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
                  onChange={(e) => changeTodoStatus(todo.id, e.target.checked)}
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
                  <AiOutlineDelete />
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
