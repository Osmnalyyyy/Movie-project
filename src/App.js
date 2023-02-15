import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuth from "./helper/zustand";
import AppRouter from "./router/AppRouter";

const App = () => {
  const { data, auth } = useSelector((state) => state);
  const { user, authZus } = useAuth((state) => state);
  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
    window.localStorage.setItem("auth", JSON.stringify(auth));
    window.localStorage.setItem("user", JSON.stringify(user));
    window.localStorage.setItem("authZus", JSON.stringify(authZus));
  }, [data, auth, user, authZus]);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
