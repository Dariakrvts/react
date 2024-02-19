import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Blogs from "../../pages/Blogs";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import {PrivateRoute }from '../../hoc/PrivateRoute';
import Counter from "../Counter";
import UsersList from "../UsersList"
import TodoList from "../../pages/TodoList";
import SmileysPage from "../../pages/SmileysPage";

class Container extends React.Component {
  state = { users: [] };

  render () {
    return (
      //метод життєвого циклу 
      <div 
        style={{
          flexGrow: '1',
        }}
      > 
        <Outlet  />
      </div> 
    )
  }
}

export default Container