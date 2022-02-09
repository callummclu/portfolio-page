import React from 'react';
import './Nav.css';

function Titlespanner(props){
  const title = props.title
  let letterComponents = []
  for (let i=0;i<title.length;i++) {
    letterComponents.push(<span>{title[i]}</span>)
  }

  return letterComponents
}


function Nav() {

  return (
    <div className="Nav">
      <p>
        <span>
          <Titlespanner title="Callum McLuskey_" />
        </span>
      </p>
    </div>
  );
}

export default Nav;
