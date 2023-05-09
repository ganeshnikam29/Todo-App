import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const initialTodos = [
  {
    title: 'Buy Notebook',
    id: 1,
    done: false,
    priority: 'low'
  },
  {
    title: 'Watch IPL',
    id: 2,
    done: false,
    priority: 'medium'
  },
  {
    title: 'Read React Docs',
    id: 3,
    done: false,
    priority: 'high'
  },
];

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = (todo) => setTodos([...todos, todo]);
    const deleteTodo = (id) => {
      const filteredTodo = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodo);
    };
    const changeTodoStatus = (e, id) => {
      console.log(e.target.checked, id);
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: e.target.checked };
        } else {
          return todo;
        }
      });
      setTodos(updatedTodos);
    };
  ;

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, changeTodoStatus }}
    >
      {children}
    </TodoContext.Provider>
  );
};
