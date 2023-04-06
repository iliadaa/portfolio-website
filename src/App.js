import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ScrollToTopRoute from "./components/scrollToTop/ScrollToTopRoute";
import Navbar from "./components/header/NavBar";
import { BackgroundContainer } from "./components/background/Background.style";

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
      {/* <Route element={<DisplayNavbar />}> */}
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route
        path="/about"
        element={<ScrollToTopRoute component={About} path="/about" />}
      />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
