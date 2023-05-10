import React, {useReducer } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { TbCircleChevronsDown, TbCircleChevronsUp } from "react-icons/Tb";
import { Button } from "./Button";
import { TodoMeta } from "./TodoMeta";
import { TodoSelect } from "./TodoSelect";
import { UseReducerInfo } from "./Info/useReducerInfo";
import "./Todo.css";

const TodosInitial = {
  input: "",
  priority: "low",
  filterValue: "all",
  todos: [
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
  ],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, input: action.payload };
    case "CHANGE_PRIORITY":
      return { ...state, priority: action.payload };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: [...filteredTodos] };
    case "CHANGE_TODO_STATUS":
      const changedStatusTodo = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, done: action.payload.status }
          : todo
      );
      return { ...state, todos: [...changedStatusTodo] };
    case "CHANGE_FILTER":
      return { ...state, filterValue: action.payload.filterValue };
    default:
      return state;
  }
}

let nextid = 0;

export const TodoWithReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, TodosInitial);

  const filterState = () => {
    if (state.filterValue === "all") {
      return state.todos;
    } else {
      return state.todos.filter((todo) => todo.priority === state.filterValue);
    }
  };

  // Add functionality
  const handleAddTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        title: state.input,
        id: nextid++,
        done: false,
        priority: state.priority,
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
      type: "CHANGE_FILTER",
      payload: {
        filterValue: filterValue,
      },
    });
  };

  return (
    <main className="content">
    <div className="to-do-container">
      <div className="add-todo-input">
        <input
          className="todo-input"
          placeholder="Enter Todo"
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "CHANGE_INPUT", payload: e.target.value })
          }
        />
        <TodoSelect
          classNames="todo-select"
          onChangePriority={(value) =>
            dispatch({ type: "CHANGE_PRIORITY", payload: value })
          }
        />
        <Button classNames="primary" handleClick={handleAddTodo}>
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
          onChangePriority={(value) => handlerFilter(value)}
          isFilter
        />
      </div>
      <TodoMeta todos={state.todos} />
      <ul>
        {filterState().map((todo) => {
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
    <UseReducerInfo />
    </main>
  );
};
