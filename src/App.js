import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Container, Typography } from "@mui/material";

import Navbar from "./components/Navbar";
import Employees from "./components/Employees";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employees />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
