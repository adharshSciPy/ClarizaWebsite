import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Enterprise from "./pages/EnterPrise/Enterprise"
import Support from "./pages/Support.jsx";

import PricingPage from "./pages/Pricing.jsx";
import Careers from "./pages/Careers";

function App() {

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="App">

      <Header theme={theme} setTheme={handleThemeChange} />

      <Routes>
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/enterprise" element={<Enterprise/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/help-center" element={<h1>Help Center</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
