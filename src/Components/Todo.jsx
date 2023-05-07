import React, { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { TbCircleChevronsDown, TbCircleChevronsUp } from "react-icons/Tb";
import { TodoMeta } from "./TodoMeta";
import { TodoSelect } from "./TodoSelect";
import { Button } from "./Button";
import "./Todo.css";
import { UseHookInfo } from "./Info/useHookInfo";


let nextId = 4;

const initialTodos = [
  {
    title: "Buy Notebook",
    id: 1,
    done: false,
    priority: 'low',
  },
  {
    title: "Watch IPL",
    id: 2,
    done: false,
    priority: 'medium',
  },
  {
    title: "Read React Docs",
    id: 3,
    done: false,
    priority: 'high',
  },
];

export const Todo = () => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [filterValue, setFilterValue] = useState('all');
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        title: input,
        id: nextId++,
        done: false,
        priority: priority
      },
    ]);
  };

  const handleDeleteTodo = (id) => {
    const updatedArray = todos.filter((todo) => todo.id !== id);
    setTodos(updatedArray);
  };

  const handleTodoStatus = (e, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: e.target.checked };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const getTodos = () => {
    if(filterValue === 'all') {
      return todos
    } else {
      return todos.filter((todo) => todo.priority === filterValue)
    }
  }

  return (
    <main className="content">
    <div className="to-do-container">
      <div className="add-todo-input">
        <input
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Todo"
        />
        <TodoSelect
          classNames="todo-select"
          onChangePriority={(value) => setPriority(value)}
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
          onChangePriority={(value) => setFilterValue(value)}
          isFilter
        />
      </div>
      <TodoMeta todos={todos} />
      <ul>
        {getTodos().map((todo, index) => {
          return (
            <li className="list-item" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => handleTodoStatus(e, todo.id)}
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
                handleClick={() => handleDeleteTodo(todo.id)}
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
    <UseHookInfo/>
    </main>
  );
};
