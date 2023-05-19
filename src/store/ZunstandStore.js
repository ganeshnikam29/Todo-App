import { create } from "zustand";

export const useZustandStore = create((set) => ({
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
    changeInputValue : (inputValue) => set(({ input: inputValue})),
    changeFilterValue: (value) => set(({ filterValue: value })),
    changePriority:  (value) => set(({ priority : value })),
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    deleteTodo: (id) => set((state) => {
        const updatedTodo = state.todos.filter((todo) => todo.id !== id) 
        return { todos: [ ...updatedTodo ] }
    }),
    changeTodoStatus: (id, status) => set((state) => {
        const newTodos = state.todos.map((todo) => {
            if(todo.id === id ) {
                return {...todo, done: status }
            }  
         return todo
        });
        return { todos: newTodos }
    }) 
  }))
