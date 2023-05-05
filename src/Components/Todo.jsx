import React, { useState } from 'react';
import { Button } from "./Button"
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { TodoMeta } from './TodoMeta';
import "./Todo.css"

let nextId = 4;

const initialTodos = [
  {
    title: 'Buy Notebook',
    id: 1,
    done: false,
  },
  {
    title: 'Watch IPL',
    id: 2,
    done: false
  },
  {
    title: 'Read React Docs',
    id: 3,
    done: false
  },
]

export const Todo = () => { 
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialTodos);
 

  const handleAddTodo =() => {
    setTodos([
      ...todos,
      {
        title: input,
        id: nextId++
      }
    ])
  }

  const handleDeleteTodo = (id) => {
    const updatedArray = todos.filter((todo) => todo.id !== id);
    setTodos(updatedArray);
  }

  const handleTodoStatus = (e,id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        return { ...todo, done: e.target.checked }
      } else {
        return todo
      }
    });
  setTodos(updatedTodos);
  }

  return (
    <div className="to-do-container">
      <div className="add-todo-input">
         <input 
            className="todo-input" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
          />
          <Button  
            classNames="primary" 
            handleClick={handleAddTodo}
          >
            <AiOutlinePlus />
            <span className="delete-label"> Add Todo </span>
          </Button>
      </div>
      <TodoMeta todos={todos}/>
      <ul>
        {todos.map((todo, index) => {
          return <li className="list-item" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(e) => handleTodoStatus(e, todo.id)}
                />
                 {todo.title}
                <Button  
                  handleClick={() => handleDeleteTodo(todo.id)} 
                  classNames="secondary"
                  >
                    Delete
                    <AiOutlineDelete/>
                  </Button>
              </li>;
        })}
      </ul>
    </div>
  );
};
