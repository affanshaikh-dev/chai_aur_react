import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="about" element={<About />} />
                    {/* Add other routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
