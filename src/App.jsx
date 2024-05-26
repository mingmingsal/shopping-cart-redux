import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import "./App.css";

function App() {
  
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
