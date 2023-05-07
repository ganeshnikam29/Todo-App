import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const getInitialState = () => ({
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
});

const TodoSlice = createSlice({
  name: "todo",
  initialState: getInitialState(),
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const indexToRemove = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      const updatedArray = state.todos
        .slice(0, indexToRemove)
        .concat(state.todos.slice(indexToRemove + 1));
      state.todos = updatedArray;
    },
    changeInput: (state, action) => {
      state.input = action.payload;
    },
    changePriority: (state, action) => {
      state.priority = action.payload;
    },
    changeFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    changeTodoStatus: (state, action) => {
      const { status, id } = action.payload;
      const todosWithChangedStatus = state.todos.map((todo) => todo.id === id ? { ...todo, done: status } : todo);
      state.todos = todosWithChangedStatus; 
    }
  },
});

export const {
  addTodo,
  deleteTodo,
  changeInput,
  changePriority,
  changeFilterValue,
  changeTodoStatus
} = TodoSlice.actions;

export const todoReducer = TodoSlice.reducer;
