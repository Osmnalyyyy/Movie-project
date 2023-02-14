import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./router/AppRouter";

const App = () => {
  const { data, auth } = useSelector((state) => state);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
    window.localStorage.setItem("auth", JSON.stringify(auth));
  }, [data, auth]);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
