import React from "react";
// import { Route} from 'react-router-dom';
import { Navigate, Outlet } from "react-router-dom";
// import { redirect } from "react-router-dom";

export const PrivateRoute = () => {
 const auth = null;

 return auth ? <Outlet/> : <Navigate to="/login" />
}