import { createSelector } from "@reduxjs/toolkit"
export const selectTodos = (state) =>  state.todo.todos;
export const selectInput = (state) => state.todo.input;
export const selectPriority =(state) => state.todo.priority; 
export const selectFilterValue =(state) => state.todo.filterValue;


// complex selector
export const selectFilteredTodos = createSelector( [selectTodos, selectFilterValue], 
    (todos, filterValue) => {
        if(filterValue === 'all') {
            return todos
        } else {
           const originalTodos = [...todos];
           const filteredTodos = originalTodos.filter((todo) => todo.priority === filterValue);
           return filteredTodos;
        }
    }
)
