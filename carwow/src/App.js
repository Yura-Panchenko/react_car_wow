import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import FrontPage from "./Pages/Front_page/Front_page";

const App = () => {
  return (
    <>
        <Header />
        <main className="main">
            <FrontPage />
        </main>
        <footer className="footer">
            footer
        </footer>
    </>
  );
}

export default App;