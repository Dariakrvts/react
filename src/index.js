/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App';
import './index.css'

import ErrorPage from "./components/ErrorPage";
import PhotoList from './pages/PhotoList';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SmileysPage from './pages/SmileysPage';
import TodoList from './pages/TodoList';
import {TasksProvider} from './Context.js'
import PhoneContacts from './pages/PhoneContacts'
import Comments from './pages/Comments';

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
      {
        path: "/photolist",
        element: <PhotoList />,
      },
      {
        path: "/PhoneContacts",
        element: <PhoneContacts />,
      },
      {
        path: "/Comments",
        element: <Comments />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TasksProvider>
     <RouterProvider router={router} />
  </TasksProvider>
 
  );

