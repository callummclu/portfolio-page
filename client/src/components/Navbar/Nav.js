import "./Nav.css"
function Nav(props) {
  const [toggle, setToggle] = props.hamburgerToggle
  return(
    <div className="nav">
      <div className="hamburgerButton">
        <button onClick={() => setToggle(!toggle)}>
            <svg className="first">
              <line x1="12.5" y1="15" x2="37.5" y2="15" className="t-l-1 l-d"/>
              <line x1="12.5" y1="25" x2="37.5" y2="25" className="m-l-1 l-d"/>
              <line x1="12.5" y1="35" x2="37.5" y2="35" className="b-l-1 l-d"/>
            </svg>
        </button>
      </div>
    </div>
  );
}

export default Nav;