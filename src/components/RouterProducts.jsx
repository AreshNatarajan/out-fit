import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

// css
import '../css/RouterProducts.css'

// img

import top1 from "../assets/cc4e159f6178631788d2ae4ba1bee4ea.jpg";
import top2 from "../assets/ac44041ba424c18d3ec187180035684e.jpg";
import top3 from "../assets/458e7c7128c69dc371413c9c103ba352.jpg";
import top4 from '../assets/440dcf2e22721ecaddc7068d93e2ec80.jpg';
import top5 from '../assets/53b0f39b835bea687d13ca85a41b1d50.jpg';
import top6 from '../assets/b3c0319517a35f91c2a00673bb2cbde2.jpg';
import top7 from '../assets/d214fd3c1eca4a5c8ffb2260c26c1481.jpg';

function RouterProducts() {
  
  return (
    <Router>
      <div   className="AllProducts" >
        <nav className="product_nav" >  
              <Link className="link_nav" to="/">
              <img alt="navimg" className="nav_img" src={top1}  />
              <div className="nav_name">Women's</div>
              </Link>
              <Link className="link_nav" to="/men">
              <img alt="navimg" className="nav_img" src={top2}  />
              <div className="nav_name">Women's</div>
              </Link>                    
              <Link className="link_nav" to="/bags">
              <img alt="navimg" className="nav_img" src={top3}  />
              <div className="nav_name">Women's</div>
              </Link>                      
              <Link className="link_nav" to="/shoes">
              <img alt="navimg" className="nav_img" src={top4}  />
              <div className="nav_name">Women's</div>
              </Link>
              <Link className="link_nav" to="/shoes">
              <img alt="navimg" className="nav_img" src={top5}  />
              <div className="nav_name">Women's</div>
              </Link>
              <Link className="link_nav" to="/shoes">
              <img alt="navimg" className="nav_img" src={top6}  />
              <div className="nav_name">Women's</div>
              </Link>
              <Link className="link_nav" to="/shoes">
              <img alt="navimg" className="nav_img" src={top7}  />
              <div className="nav_name">Women's</div>
              </Link>
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
