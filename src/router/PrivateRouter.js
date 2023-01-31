import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const PrivateRouter = () => {
  let auth = true;
  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRouter;
