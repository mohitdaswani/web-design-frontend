import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/MoviesNav.css";
import { logoutUser } from "../redux/actions/userActions";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { logoutAdmin } from "../redux/actions/adminAction";
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
      {/* <img
        style={{ width: "150px" }}
        className="nav_logo"
        // src="https://cdn.dribbble.com/users/5926297/screenshots/14065311/imovie_final_4x.jpg"
        // src = "http://www.clker.com/cliparts/s/7/y/E/y/T/clap-film-movie.svg.med.png"
        alt="Movie logo"
      /> */}
      {(user||admin)
       ? (
        <Button
          color="link"
          style={{ color: "white", fontSize: "25px" }}
          className="ButtonStyle"
          onClick={handleLogout}
        >
          Sign Out
        </Button>
      ) : null}
    </div>
  );
};

export default connect(null, { logoutUser ,logoutAdmin})(withRouter(NavBar));