import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Todo } from "./Components/Todo";
import { TodoWithReducer } from "./Components/TodoWithReducer";
import { TodoWithRT } from "./Components/TodoWithRT";
import { TodoProvider } from "./context";
import { TodoWithContext } from "./Components/TodoWIthContext";
import { ZustandDemo } from "./Components/ZustandDemo";

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
      {
        path: "/byZustand",
        element: <ZustandDemo />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRoutes} />);
