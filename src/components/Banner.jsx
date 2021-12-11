import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import { withRouter, Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

const Banner = ({ movies ,history}) => {
  // const [imgurl, setimgurl] = useState(initialState)
  const movie = movies[Math.floor(Math.random() * movies.length)];
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const imgurl=`https://${movie.backgroundImage}`
  const handleClick=async()=>{
history.push("")
  }
  return (
    <header
      className="banner"
      style={{
        
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("${imgurl}")`,
      }}
    >
            <div className="banner_fadetop"/>
      <div className="banner_content">
        <h1 className="banner_title">{movie?.MovieName || movie?.title}</h1>
        <div className="banner_buttons">
         <Link to={`movies/${movie._id} `}> <button className="banner_button" >Play</button></Link>
          <Link to="/mylist"><button className="banner_button">My list</button></Link>
          <div className="banner_description">
            {truncate(Math.floor(movie?.runTime / 60), 150)}h {truncate(Math.floor(movie?.runTime % 60), 150)}mins 
            | {truncate(movie?.language.charAt(0).toUpperCase() + movie?.language.substr(1).toLowerCase(), 150)} | <AiTwotoneStar style={{marginTop: "-5", color: "#FDCC0D"}}/> {truncate(movie?.rating, 150)}
            <br/>
            <div className="banner_des">
              {truncate(movie?.description, 300)}
            </div>
          </div>
        </div>
      </div>
      <div className="banner_fadeBottom"/>
    </header>
  );
};

export default withRouter(Banner);
