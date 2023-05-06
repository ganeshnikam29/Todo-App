import React, { Children } from "react";
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Todo } from "./Components/Todo";
import { TodoWithReducer } from "./Components/TodoWithReducer";
import { TodoWithRT } from "./Components/TodoWithRT";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/bystatehook',
                element:<Todo /> 
            },
            {
                path: '/byusereducer',
                element:<TodoWithReducer/> 
            },
            {
                path: '/byreduxtoolkit',
                element:<TodoWithRT /> 
            }
        ]
    }
])

root.render(<RouterProvider router={appRoutes} />);
