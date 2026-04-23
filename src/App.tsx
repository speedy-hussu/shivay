import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
