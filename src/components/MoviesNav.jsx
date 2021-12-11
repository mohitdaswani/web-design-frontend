import React, { useState, useEffect } from "react";
import "../styles/MoviesNav.css";
import { Link, withRouter } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";
import { searchMovies } from "../redux/actions/movieAction";
import {
  Nav,
  Navlink,
  Bars,
  NavMenu
} from './NavbarElements';
import { FcClapperboard, FcLike, FcVideoFile, FcServices, FcRight } from "react-icons/fc";
import { left } from "@popperjs/core";

const MoviesNav = ({ logoutUser, history, color, searchMovies }) => {
  const [show, handleShow] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleLogout = async () => {
    await logoutUser();
    history.push("/user/login");
  };
  const handleSearchChange = async (e) => {
    e.persist()
    setTimeout(() => {
      history.push(`/search?name=${e.target.value}`)
    }, 1000);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      // window.removeEventListener("scroll")
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`} style={{ background: "Red" }}>
      

      <Nav>
        
        <Navlink to='/'>
          <img src={"https://i.pinimg.com/originals/66/dc/76/66dc7687b078fce1a5239985b1f0b1c8.gif"} style={{ width: "10%", display: left }} alt='logo' />
        </Navlink>
        <Bars />
        <NavMenu>
          {/* <Navlink to='/' activeStyle>
            Home
          </Navlink> */}
          <Navlink to='/movies/language' activeStyle>
          <FcClapperboard/>&nbsp;Movies
          </Navlink>
          <Navlink to='/mylist' activeStyle>
           <FcLike/>&nbsp;My List
          </Navlink>
          <Navlink to='/latest' activeStyle>
          <FcVideoFile/>&nbsp;Latest
          </Navlink>
          <div style={{ display: "flex", justifyContent:"flex-end" }}>
        <input
          className="search-input"
          type="search"
          style={{color:"white", marginTop: "4px", marginLeft: "5px"}}
          onChange={handleSearchChange}
          placeholder="Enter Movie Name..."
        />
        <Dropdown
          isOpen={dropdownOpen}
          style={{ marginLeft: "6px" }}
          toggle={toggle}
        >
          <DropdownToggle
            style={{ background: "transparent",border:"black" }}
            caret
          >
            Account
          </DropdownToggle>
          <DropdownMenu style={{}}>
            <DropdownItem>
              <Link to="/yourAccount"> <FcServices/>&nbsp;Account </Link>
            </DropdownItem>
            <DropdownItem onClick={handleLogout}>
              
              <FcRight/>&nbsp;Sign out of iMovies
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
        </NavMenu>
        
      </Nav>
      
    </div>
  );
};

export default connect(null, { logoutUser, searchMovies })(
  withRouter(MoviesNav)
);
