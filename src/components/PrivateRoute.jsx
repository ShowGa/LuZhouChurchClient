import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// deal with the private route later
const PrivateRoute = () => {
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
