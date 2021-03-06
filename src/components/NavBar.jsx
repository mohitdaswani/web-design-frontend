import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/MoviesNav.css";
import { logoutUser } from "../redux/actions/userActions";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { logoutAdmin } from "../redux/actions/adminAction";
import {
  Nav,
  Navlink,
  Bars,
  NavMenu
} from '../components/NavbarElements';
import "../styles/adminForm.css";
import { FcPlus, FcCancel } from "react-icons/fc";
import { left } from "@popperjs/core";

const NavBar = ({ logoutUser,logoutAdmin, history,extrastyle }) => {
  const handleLogout = async () => {
    if(admin) {
          await logoutAdmin();
          localStorage.removeItem("admin")
    history.push("/admin/login");
    }
    else{
    await logoutUser();
    history.push("/user/login");
  }};
  let user = null;
  if (localStorage.getItem("user")) {
    if (localStorage.getItem("user") !== undefined) {
      const userJSON = localStorage.getItem("user");
      user = JSON.parse(userJSON);
    }
  }
  let admin = null
  if (localStorage.getItem("admin")) {
    if (localStorage.getItem("admin") !== undefined) {
       admin = localStorage.getItem("admin");
    }
  }
  return (
    <div
      className={`nav`}
      style={{ display: "flex", justifyContent: "flex-end", ...extrastyle}}
    >
      {(user||admin)
       ? (
        <Nav>
        <Navlink to='/'>
          <img src={"https://i.pinimg.com/originals/66/dc/76/66dc7687b078fce1a5239985b1f0b1c8.gif"} style={{ width: "10%", display: left }} alt='logo' />
        </Navlink>
        <Bars />
        <NavMenu>
          {/* <Navlink to='/' activeStyle>
            Home
          </Navlink> */}
          <Navlink to='/admin/addMovie' activeStyle>
          <FcPlus/>&nbsp;Add Movies
          </Navlink>
          <Navlink to='/admin/deleteMovie' activeStyle>
           <FcCancel/>&nbsp;Delete Movies
          </Navlink>
          <Button
            color="link"
            style={{ color: "black", fontSize: "15px"}}
            className="ButtonStyle"
            onClick={handleLogout}
        >
          <i class="fas fa-sign-out-alt float-center"></i> <span style={{color: "whitesmoke", fontSize: "10"}}>Sign Out</span>
        </Button>
          
        </NavMenu>
        
       </Nav>

        
      ) : null}
    </div>
  );
};

export default connect(null, { logoutUser ,logoutAdmin})(withRouter(NavBar));