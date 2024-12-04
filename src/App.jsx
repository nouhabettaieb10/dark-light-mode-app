import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ThemeProvider, useTheme } from "../themeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
