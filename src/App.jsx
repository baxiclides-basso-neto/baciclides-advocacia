import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ContactPage from "./pages/contactpage/ContactPage";
import Header from "./components/Header/header";
import ServicesPage from "./pages/servicespage/ServicesPage";
import Footer from "./components/footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
