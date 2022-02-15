import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// Routing import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page imports
import Home from './Pages/Homepage/Home'
import Portfolio from './Pages/PortfolioPage/Portfolio'
import Contact from './Pages/ContactPage/Contact'
import PortfolioItem from './Pages/PortfolioItem/PortfolioItem'

// component imports
import ScrollToTop from './ScrollToTop'
import Nav from './components/Navbar/Nav'
import Sidebar from './components/sidebar/Sidebar'

// general styling import
import './index.css'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
      <BrowserRouter>
        <Nav hamburgerToggle={[toggle,setToggle]}/>
        <Sidebar show={toggle}/>
          <ScrollToTop>
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />}  />
              <Route path="contact" element={<Contact />} />
              <Route path="portfolio/:id" element={<PortfolioItem/>} />
            </Routes>
          </ScrollToTop>
      </BrowserRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);