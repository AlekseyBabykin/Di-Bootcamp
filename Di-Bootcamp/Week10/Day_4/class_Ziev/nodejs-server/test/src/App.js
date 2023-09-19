import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="About">About</Link>{" "}
        <Link to="/shop">Shop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
