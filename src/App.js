import React from "react";
import Form from "./Components/Form";
import { Todo } from "./Components/Todo";
import { TodoWithReducer } from "./Components/TodoWithReducer";
import { TodoWithRT } from "./Components/TodoWithRT";
import { Provider } from 'react-redux';
import { store } from "./store";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Outlet } from 'react-router-dom'

const App = () => {
    return(
        <Provider store={store}>
         <Header/>
         <Outlet/>
        {/* <Form/> */}
        {/* <Todo/> */} {/* Todo Application with UseState Hook */}  
        {/* <TodoWithReducer/> */} {/* Todo Application with useReducer Hook */} 
        {/* <TodoWithRT/>  Todo Application with Redux Toolkit  */}
        <Footer/>
        </Provider>
    )
}

export default  App;