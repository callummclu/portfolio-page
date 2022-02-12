import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import './index.css'
import Pgrid from './PortfolioDisplayGrid/Pgrid'
import Textsection from './TextSection/Textsection'
import Footer from './footer/footer'
import Popup from './PagePopup/Popup'
import gridItems from './gridItems'
import ScrollToTop from './ScrollToTop'

function Home(){
  const otherPosts = <div className="display-container"><div className="box"></div><div className="box"></div><div className="box"></div><div className="box"></div><div className="box"></div></div>

  return(
    <>
      <div className="container-text-container">
        <Textsection title=<h1>Welcome</h1> content=<p>Hi, im Callum. Im currently a 3rd year student studying at the university of glasgow here are a few of my past and current projects.</p>/>
        <div className="text-info-container">
        <div className="text-infobox">
        </div>
        <div className="text-infobox no-box">
          <Link to="/portfolio"><button>Portfolio</button></Link><br/>
          <Link to="/contact"><button>Contact</button></Link>
        </div>
        </div>
        <Textsection title=<h3>Some of my Projects</h3> content={otherPosts} />

      </div>
    </>
  )
}

function Portfolio(){
  return(
    <>

      <div className="container-text-container">
        <Textsection title=<h1>Portfolio</h1> content=<p>Here are a few projects ive built.</p> />
        <Pgrid boxArray={gridItems}/>
      </div>
    </>
  )
}

function Contact(){
  return(
    <>
      <div className="container-text-container">

        <Textsection title=<h1>Contact</h1> content=<p>Here are my contact details.</p> />

      </div>
    </>
  )
}

function Titlespanner(props){
  const title = props.title
  let letterComponents = []
  for (let i=0;i<title.length;i++) {
    letterComponents.push(<span>{title[i]}</span>)
  }

  return letterComponents
}

function Dropdown() {
  const date = new Date()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  const mon = date.getMonth()
  const mon_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const day = date.getDay()
  const day_arr = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const dateday = date.getDate()
  

  return (

    <div className="dropdown-menu">
      <p>Last login: {day_arr[day-1]} {mon_arr[mon]}  {dateday} {h}:{m}:{s} on ttys001</p>

      <p> ~ % whoami </p>
      <p> callummcluskey100@gmail.com </p>

      <p> ~ % curl Github</p>
      <p>  <a href="https://github.com/callummclu">https://github.com/callummclu</a> </p>
      <p> ~ % ls </p>
      <p>

      <Link to="/">/Home</Link>
      <Link to="portfolio">/Projects</Link>
      <Link to="contact">/Contact</Link>

      </p>
    </div>
  );
}

function Nav() {
  const [show,toggleShow] = React.useState(true);
  return (
    <>
    <div className="Nav">
      <p>
        <span>
          <span>
            <div onClick={() => toggleShow(!show)}>
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <line strokeWidth="1.5" stroke="#ffffff" id="svg_2" y2="7.25" x2="12.28752" y1="7.25" x1="2.59375" fill="none"/>
                <line strokeWidth="1.5" id="svg_3" y2="17.62499" x2="22.73272" y1="17.62499" x1="2.59375" stroke="#ffffff" fill="none"/>
                <line strokeWidth="1.5" stroke="#ffffff" id="svg_4" y2="12.56249" x2="17.05755" y1="12.56249" x1="2.59375" fill="none"/>
              </svg>
            </div>
          </span>
          <Link to="/">
            <Titlespanner title="...      Callum McLuskey_" />
          </Link>
        </span>
      </p>
    </div>
    {!show && <Dropdown />}
    </>
  );
}

function App() {
  return (
      <BrowserRouter>
        <Nav />
          <ScrollToTop>
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="portfolio/:id" element={<Popup />} />
            </Routes>
          </ScrollToTop>
        <Footer />
      </BrowserRouter>
  );
}




ReactDOM.render(
  <div className="container-text-container">
      <App/>
  </div>,

  document.getElementById('root')
);




