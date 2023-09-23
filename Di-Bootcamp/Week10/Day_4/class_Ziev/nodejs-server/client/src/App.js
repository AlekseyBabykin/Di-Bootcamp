import Products from "./Components/Products";
import Product from "./Components/Product";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./Components/LoginRegister";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/login" element={<LoginRegister title={/>} />
        <Route path="/register" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
