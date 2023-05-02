import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  
  console.log(user);
  
  if (user) {
    return children;
  } else {
    return <Navigate to="/login"  replace={true} state={{from:location}}/>;
  }
};

export default PrivateRoute;
