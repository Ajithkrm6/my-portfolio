import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { TypeWritter } from "./components/TypeWritter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./pages/home";
import { MainScreen } from "./pages/main";
import { SkillScreen } from "./pages/skills";
import { ProjectScreen } from "./pages/projects";
import { ContactScreen } from "./pages/contactMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/#skills" element={<SkillScreen />} />
        <Route path="/#projects" element={<ProjectScreen />} />
        <Route path="/#contact" element={<ContactScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
