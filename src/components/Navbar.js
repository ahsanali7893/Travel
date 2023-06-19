import { useState,   } from "react";
import { useLocation } from 'react-router-dom';
import { Menuitems } from "./Menuitems";
import { Link,  } from "react-router-dom";
import "./NavbarStyle.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const location = useLocation();
  const currentUrl = location.pathname;

  const handleClick = () => {
    setClick(!click);
  };
  const active = { backgroundColor: "#01959a", color: "white", borderRadius:"4px" };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.url}
                style={
                   location.pathname.endsWith(`${item.url}`) ? active : null
                }
              >
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}
