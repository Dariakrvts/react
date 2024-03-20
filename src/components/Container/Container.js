import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../../hoc/PrivateRoute";

import PhotoList from "../../pages/PhotoList";
import SmileysPage from "../../pages/SmileysPage";
import TodoList from "../../pages/TodoList";
import PhoneContacts from "../../pages/PhoneContacts";
import Login from "../../pages/LogIn";
import Forms from "../../pages/Forms";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="Container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forms" element={<PrivateRoute><Forms /></PrivateRoute>}/>          
          <Route path="/phonecontacts" element={<PrivateRoute><PhoneContacts /></PrivateRoute>}/>
          <Route path="/photolist" element={ <PrivateRoute><PhotoList /> </PrivateRoute>}/>
          <Route path="/smilepages" element={<PrivateRoute><SmileysPage /> </PrivateRoute>}/>
          <Route path="/todolist" element={<PrivateRoute><TodoList /></PrivateRoute>}/>
        </Routes>
      </main>
    );
  }
}
export default Container;
