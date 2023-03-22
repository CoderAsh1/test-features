import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import School from "./School";
import Students from "./Students";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />}>
          <Route path="school" element={<School />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
