import React, { useEffect } from "react";
// import logo from "./logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Header } from "./components/Header";
import { TypeWritter } from "./components/TypeWritter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./pages/home";
import { MainScreen } from "./pages/main";
import { SkillScreen } from "./pages/skills";
import { ProjectScreen } from "./pages/projects";
import { ContactScreen } from "./pages/contactMe";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      easing: "ease-in-out",
      duration: 1000, // You can customize the animation duration
    });
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/#skills" element={<SkillScreen />} />
        <Route path="/#projects" element={<ProjectScreen />} />
        <Route path="/#contact" element={<ContactScreen />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
