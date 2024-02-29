import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  // const auth = false;

  return isLoggedIn 
    ? children : <Navigate to="/" />;
};

export default PrivateRoute;