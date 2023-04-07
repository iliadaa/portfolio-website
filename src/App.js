import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/header/NavBar";
import { BackgroundContainer } from "./components/background/Background.style";
import Contact from "./pages/Contact";

const DisplayNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BackgroundContainer>
            <Navbar />
            <Home />
          </BackgroundContainer>
        }
      />
      <Route element={<DisplayNavbar />}>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
