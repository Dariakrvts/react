import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";


import Blogs from "../../pages/Blogs";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import {PrivateRoute }from '../../hoc/PrivateRoute';


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

         {/* один з варіантів як можна зробити
          <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Home/>} />
          </Route>

              <Route path="blogs" element={<Blogs />} />  
              <Route path="contact" element={<Contact />} />

          </Routes> */}
          
      </div> 
    )
  }
}

export default Container