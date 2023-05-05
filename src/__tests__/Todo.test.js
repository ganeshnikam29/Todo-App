import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Todo } from '../Components/Todo';

describe('Todo', () => {
  it('should render the component', () => {
    render(<Todo />);
    const addBtn = screen.getByRole('button', {
      name: /add todo/i
    }) 
    expect(addBtn).toBeInTheDocument();
  });

  it('Should add a todo item when user Clicks on addTodo button',() => {
    render(<Todo/>);
    const inputText = screen.getByRole('textbox') 
    const addBtn = screen.getByRole('button', {
        name: /add todo/i
    }) 
    const todoTitle = 'Book ticket on IRCTC';

    fireEvent.click(inputText);
    fireEvent.change(inputText, { target: { value: todoTitle}})
    fireEvent.click(addBtn);

    const addedTodoTitle = screen.getByText(todoTitle);
    expect(addedTodoTitle).toBeInTheDocument();
  })

  it('Should delete todo item when user Click on delete button',() => {
    render(<Todo/>)
    const deleteBtn = screen.getAllByRole('button', {
        name: /delete/i
    }) 
    const todoTitle = screen.queryByText('Watch IPL')
    
    fireEvent.click(deleteBtn[1]);
    
    expect(todoTitle).not.toBeInTheDocument();
  })

  it('Should mark a todo as done when Checkbox is Clicked', () => {
    render(<Todo/>);
    const checkboxbtn = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxbtn[0]);
    expect(checkboxbtn[0].checked).toBe(true);
  })    
});
