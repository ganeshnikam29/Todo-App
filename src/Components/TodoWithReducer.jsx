import React, { useReducer, useState } from "react";
import { Button } from "./Button";
import { TodoMeta } from "./TodoMeta";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { TbCircleChevronsDown, TbCircleChevronsUp } from "react-icons/Tb";
import "./Todo.css";
import { TodoSelect } from "./TodoSelect";

const initialTodos = [
  {
    title: "Buy Notebook",
    id: 1,
    done: false,
    priority: "low",
  },
  {
    title: "Watch IPL",
    id: 2,
    done: false,
    priority: "medium",
  },
  {
    title: "Read React Docs",
    id: 3,
    done: false,
    priority: "high",
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      const todoList = [...state]
      return todoList.filter((todo) => todo.id !== action.payload);
    case "CHANGE_TODO_STATUS":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, done: action.payload.status }
          : todo
      );
    case "CHANGE_FILTER": 
      const newTodosList = JSON.parse(JSON.stringify(state));
      if (action.payload.filterValue === "all") {
        return [...state];
      } else {
        console.log(newTodosList);
        const filteredTodoList = newTodosList.filter(
          (todo) => todo.priority === action.payload.filterValue
        );
        return filteredTodoList;
      }
    default:
      return state;
  }
}

let nextid = 0;

export const TodoWithReducer = () => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  

  // Add functionality
  const handleAddTodo = () => {
    //Write Add Logic
    dispatch({
      type: "ADD_TODO",
      payload: {
        title: input,
        id: nextid++,
        done: false,
        priority: priority
      },
    });
  };

  // Delete functionality
  const handleDeleteTodo = (id) => {
    //Write Delete Logic
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  // Change Status functionality
  const handleTodoStatus = (e, id) => {
    dispatch({
      type: "CHANGE_TODO_STATUS",
      payload: {
        status: e.target.checked,
        id: id,
      },
    });
  };

  //apply filter logic
  const handlerFilter = (filterValue) => {
    dispatch({
      type: 'CHANGE_FILTER',
      payload: {
        filterValue: filterValue,
        todos: state
      }
    })
  }

  return (
    <div className="to-do-container">
      <div className="add-todo-input">
        <input
          className="todo-input"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <TodoSelect 
          classNames="todo-select"
          onChangePriority={value => setPriority(value)}
        />
        <Button classNames="primary" handleClick={handleAddTodo}>
          <AiOutlinePlus />
          Add Todo
        </Button>
      </div>
      <div className="filter-container">
        <label htmlFor="priority-filter" className="filter-label">Filter by Priority</label>
        <TodoSelect 
           classNames="todo-select-filter"
           onChangePriority={(value) => handlerFilter(value)}
           isFilter
        />
      </div>
      <TodoMeta todos={state} />
      <ul>
        {state.map((todo) => {
          return (
            <li key={todo.id} className="list-item">
              <input
                type="checkbox"
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
                classNames="secondary"
                handleClick={() => handleDeleteTodo(todo.id)}
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
