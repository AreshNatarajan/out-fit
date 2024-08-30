import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
// import { useRef } from "react";
//css

import '../css/RouterProducts.css'


function RouterProducts() {
  
  return (
    <Router>
      <div   className="AllProducts" >
        <nav className="product_nav" >  
              <Link className="link_nav" to="/">Women's Top</Link>
              <Link className="link_nav" to="/men">Men's Wear</Link>                    
              <Link className="link_nav" to="/bags">Bags</Link>                      
              <Link className="link_nav" to="/shoes">Shoes</Link>
              <Link className="link_nav" to="/shoes">Shoes</Link>
              <Link className="link_nav" to="/shoes">Shoes</Link>
              <Link className="link_nav" to="/shoes">Shoes</Link>
        </nav>

       

        <Routes>
          <Route path="/" element={<ProductList category="top" />} />
          <Route path="/men" element={<ProductList category="men" />} />
          <Route path="/bags" element={<ProductList category="bags" />} />
          <Route path="/shoes" element={<ProductList category="shoes" />} />
          <Route path="/product/:id/:category" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouterProducts;
