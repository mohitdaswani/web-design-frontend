import React, { useState, useEffect } from "react";
import "../styles/MoviesNav.css";
import { Link, withRouter } from "react-router-dom";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";
import { searchMovies } from "../redux/actions/movieAction";
// import {
//   Nav,
//   Navlink,
//   Bars,
//   NavMenu
// } from './NavbarElements';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
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

  const [navOpen, setNavOpen] = useState(false);
  const OnToggle = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  }

  return (
    <div>
      

      <Navbar color="#000" dark expand="md">
          <NavbarBrand to="/">
            <img src={"https://i.pinimg.com/originals/66/dc/76/66dc7687b078fce1a5239985b1f0b1c8.gif"} style={{ width: "10%", display: left }} alt='logo' />
          </NavbarBrand>
          <NavbarToggler onClick={OnToggle} />
          <Collapse isOpen={navOpen} navbar>
            <Nav style={{backgroundColor: "#000"}} dark className="ml-auto" navbar>
              <NavItem color="#000">
                <NavLink color="#000" href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      
    </div>
  );
};

export default connect(null, { logoutUser, searchMovies })(
  withRouter(MoviesNav)
);
