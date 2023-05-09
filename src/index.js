import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Todo } from "./Components/Todo";
import { TodoWithReducer } from "./Components/TodoWithReducer";
import { TodoWithRT } from "./Components/TodoWithRT";
import "./index.css";
import { TodoProvider } from "./context";
import { TodoWithContext } from "./Components/TodoWIthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/bystatehook",
        element: <Todo />,
      },
      {
        path: "/byusereducer",
        element: <TodoWithReducer />,
      },
      {
        path: "/byreduxtoolkit",
        element: <TodoWithRT />,
      },
      {
        path: "/byuseContext",
        element: (
          <TodoProvider>
            <TodoWithContext />
          </TodoProvider>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRoutes} />);
