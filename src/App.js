import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./router/AppRouter";

const App = () => {
  const { data } = useSelector((state) => state);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
