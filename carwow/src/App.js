import React from "react";
import './App.css';
import HeroSection from "./HeroSection/HeroSection";
import Header from "./Header/Header";

const App = () => {
  return (
    <>
        <Header />
        <main className="main">
            <HeroSection />
        </main>
        <footer className="footer">
            footer
        </footer>
    </>
  );
}

export default App;