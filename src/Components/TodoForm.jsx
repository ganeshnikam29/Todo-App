import React, { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from './Button';
import { TodoContext } from '../context';
import { TodoSelect } from './TodoSelect';

let nextId = 5;
export const TodoForm = () => {
  const [input, setInput] = useState('');
  const [priority , setPriority] = useState('low'); 
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    addTodo({
      title: input,
      id: nextId++,
      done: false,
      priority,
    });
  };

  return (
    <div className="add-todo-input">
      <input
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
       <TodoSelect
          classNames="todo-select"
          onChangePriority={(value) =>
            setPriority(value)
          }
      />
      <Button classNames="primary" handleClick={handleAddTodo}>
        <AiOutlinePlus />
        <span className="delete-label"> Add Todo </span>
      </Button>
    </div>
  );
};
