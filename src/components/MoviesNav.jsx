import React, { useState, useEffect } from "react";
import "../styles/MoviesNav.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";
import { searchMovies } from "../redux/actions/movieAction";
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
    <div className={`nav ${show && "nav_black"}`} style={{ background: color }}>
      
      <img
        className="nav_logo"
        src="https://i.pinimg.com/originals/66/dc/76/66dc7687b078fce1a5239985b1f0b1c8.gif"
        alt="Movie logo"
      />
      
      <div style={{ display: "flex", marginLeft: "140px" }}>
        <p>
          <NavLink className="navlinkStyle" to="/">
          <i class="fas fa-home"></i> Home
          </NavLink>
        </p>
        <p>
          <NavLink className="navlinkStyle" to="/movies/language">
          <i class="fas fa-film"></i> Movies
          </NavLink>
        </p>
        <p>
          <NavLink className="navlinkStyle" to="/mylist">
          <i class="fas fa-list"></i> My List
          </NavLink>
        </p>
        <p>
          <NavLink className="navlinkStyle" to="/latest">
          <i class="fas fa-tv"></i>Latest
          </NavLink>
        </p>
      </div>
      <div style={{ display: "flex",justifyContent:"flex-end" }}>
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
    </div>
  );
};

export default connect(null, { logoutUser, searchMovies })(
  withRouter(MoviesNav)
);
