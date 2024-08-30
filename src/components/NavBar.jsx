import {FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { useRef } from 'react';
import '../css/NavBar.css'
function NavBar(){
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive_nav')
    }
    return(
        <>
         <header className='header' >
            <h3 className='logo' >Logo</h3>
            <nav className='nav' ref={navRef}>
                <a className='link' href="/#" >Home</a>
                <a className='link' href="/#" >Home</a>
                <a className='link' href="/#" >Home</a>
                <a className='link' href="/#" ><FiShoppingCart/></a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar} >
                     <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars/>
            </button>
         </header>
        </>
    );
}

export default NavBar