import "./App.css";
import React from "react";
import {Nav} from "./Pages/nav";
import Hero from "./Pages/hero";

import {Route, Routes} from "react-router-dom";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Location from "./Pages/Location";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
    return (
        <>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/auth" element={<Login />} />
                    <Route path="/auth2" element={<Register />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
