import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App';
import './index.css'
import ErrorPage from "./components/ErrorPage";

import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SmileysPage from './pages/SmileysPage';
import TodoList from './pages/TodoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/smileyspage",
        element: <SmileysPage />,
      },
      {
        path: "/todolist",
        element: <TodoList />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
  );

