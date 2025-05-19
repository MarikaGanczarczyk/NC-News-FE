import React from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Topics from "./pages/Topics";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
        <NavBar />
      <Routes>
    
   
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
