import React from "react";
import "../src/styles/styles.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ModelsPage from "./pages/ModelsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<ModelsPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
