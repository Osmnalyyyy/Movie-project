import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../helper/zustand";
import Details from "../pages/Details";
import Home from "../pages/Home";

const PrivateRouter = () => {
  const auth = useAuth((state) => state.authZus);

  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRouter;
