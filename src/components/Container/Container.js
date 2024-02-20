import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Contact from "../../pages/Contact";

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
        {/* <Contact /> */}
      </div> 
    )
  }
}

export default Container