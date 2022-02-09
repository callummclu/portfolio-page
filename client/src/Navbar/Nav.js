import React from 'react';
import './Nav.css';
import Dropdown from '../NavDropDown/Dropdown';

function Titlespanner(props){
  const title = props.title
  let letterComponents = []
  for (let i=0;i<title.length;i++) {
    letterComponents.push(<span>{title[i]}</span>)
  }

  return letterComponents
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
                <line stroke-width="1.5" stroke="#ffffff" id="svg_2" y2="7.25" x2="12.28752" y1="7.25" x1="2.59375" fill="none"/>
                <line stroke-width="1.5" id="svg_3" y2="17.62499" x2="22.73272" y1="17.62499" x1="2.59375" stroke="#ffffff" fill="none"/>
                <line stroke-width="1.5" stroke="#ffffff" id="svg_4" y2="12.56249" x2="17.05755" y1="12.56249" x1="2.59375" fill="none"/>
              </svg>
            </div>
          </span>
          <Titlespanner title="...      Callum McLuskey_" />
        </span>
      </p>
    </div>
    {!show && <Dropdown />}
    </>
  );
}

export default Nav;
