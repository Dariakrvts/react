import React  from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute  from "../../hoc/PrivateRoute";

import PhotoList from '../../pages/PhotoList';
import Blogs from '../../pages/Blogs'
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import SmileysPage from '../../pages/SmileysPage';
import TodoList from '../../pages/TodoList';
import PhoneContacts from '../../pages/PhoneContacts';
import Comments from '../../pages/Comments';
import Login from '../../pages/LogIn';

class Container extends  React.Component{
  constructor(props) {
    super(props);
    this.state ={

    }
  };


  render() {
    return <main className="Container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/blogs" element={<PrivateRoute><Blogs /></PrivateRoute>}/>
        <Route path="/comments" element={<PrivateRoute><Comments /></PrivateRoute>}/>
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>}/>
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/phonecontacts" element={<PrivateRoute><PhoneContacts /></PrivateRoute>}/>
        <Route path="/photolist" element={<PrivateRoute><PhotoList /></PrivateRoute>}/>
        <Route path="/smilepages" element={<PrivateRoute><SmileysPage /></PrivateRoute>}/>
        <Route path="/todolist" element={<PrivateRoute><TodoList /></PrivateRoute>}/>
      </Routes>
    </main>
  }}
export default Container;