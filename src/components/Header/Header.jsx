import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, Link } from "react-router-dom";
import ServicePage from "../../Pages/ServicesPages/ServicePage";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="App h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
       <Link to='/'><img src="./logo.png" alt="logo" width={100} /></Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <Link to='/Pages/ServicesPages/ServicePage'>Services</Link>
            <Link to='/Pages/ContactPages/ContactPage'>Contact Us</Link>
            <Link to='/Pages/AboutPages/AboutPage'>About Us</Link>
            <Link to='/Pages/ValuesPages/ValuesPage'>Values</Link>
            <button className="button">
              <a href="mailto:ksatyam.1245@gmail.com.com">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
