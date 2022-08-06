import "./App.css";

import { HookUseContext } from "./components/UseContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <HookUseContext>
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </HookUseContext>
        </div>
    );
}

export default App;
