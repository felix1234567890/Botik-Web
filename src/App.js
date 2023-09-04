import React from "react";
import "../src/styles/styles.scss";
// import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Models from "./components/Models/Models";
import Calculator from "./components/Calculator/Calculator";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Models />
      <Calculator />
      <Features />
    </>
  );
}

export default App;
