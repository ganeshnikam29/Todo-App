import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Outlet } from 'react-router-dom'

const App = () => {
    return(
        <Provider store={store}>
         <Header/>
         <Outlet/>
        <Footer/>
        </Provider>
    )
}

export default  App;
