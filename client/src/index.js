import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page imports
import Home from './Pages/Homepage/Home'
import Portfolio from './Pages/PortfolioPage/Portfolio'
import Contact from './Pages/ContactPage/Contact'
import PortfolioItem from './Pages/PortfolioItem/PortfolioItem'
import NewPost from './Pages/NewPost'
import EditPost from './Pages/EditPost'
import Login from './Pages/login'
import Register from './Pages/register'
import Error from './Pages/Error'
import AccountPage from './Pages/Account/Account'

// component imports
import ScrollToTop from './ScrollToTop'
import Nav from './components/Navbar/Nav'
import Sidebar from './components/sidebar/Sidebar'

// general styling import
import './index.css'

function App() {
  const [toggle, setToggle] = useState(false)
  const [isAuth, setIsAuth] = useState({})
  const [permissions, setPermissions] = useState({})

  let isAdmin = false

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/API/account/is_authenticated`)
      setIsAuth(result.data.message)
      setPermissions(result.data.permissions)
    }
    fetchData();
  }, [])

  
  if(permissions === "2"){
    isAdmin = true
  }
  
  return (
      <BrowserRouter>
        <Nav hamburgerToggle={[toggle,setToggle]}/>
        {isAuth ? <Sidebar auth="true" show={toggle}/> : <Sidebar show={toggle}/>}
          <ScrollToTop>
            <Routes> 
              <Route path="/" element={<Home auth={isAdmin} />} />
              <Route path="portfolio" element={<Portfolio auth={isAdmin}/>}  />
              <Route path="contact" element={<Contact auth={isAdmin}/>} />
              <Route path="portfolio/:id" element={<PortfolioItem auth={isAdmin}/>} />
              <Route path="portfolio/create" element={<NewPost auth={isAdmin}/>} />
              <Route path="portfolio/:id/edit" element={<EditPost auth={isAdmin}/>}/>
              <Route path="login" element={<Login />}/>
              <Route path="register" element={<Register />}/>
              <Route path="account" element={<AccountPage/>}/>
              <Route path="*" element={<Error type="404" message="page not found"/> }/>
            </Routes>
          </ScrollToTop>
      </BrowserRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);