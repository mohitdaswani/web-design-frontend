import React, { useState, useEffect } from "react";
import "../styles/MovieDetailPopup.css";
import { withRouter, Link } from "react-router-dom";
import { addToWatchlist } from "../redux/actions/watchlistAction";
import { connect } from "react-redux";
import { MdCancel } from "react-icons/md";
import {AiTwotoneStar} from "react-icons/ai"
import { IoMdAddCircle} from 'react-icons/io';

const MovieDetailPopup = ({ movie, addToWatchlist }) => {
  const [Popup, setPopup] = useState(false);
  const [Imgurl, setImgurl] = useState();
  const [Duration, setDuration] = useState();
  const [movieGenres, setmovieGenres] = useState([]);
  useEffect(() => {
    if (movie != null) {
      console.log(movie);
      setPopup(true);
      const imgurl = `https://${movie.backgroundImage}`;
      setImgurl(imgurl);
      console.log(movie.runTime);
      const hours = Math.floor(movie.runTime / 60);

      const minutes = Math.floor(movie.runTime) - hours * 60;
      setDuration(`${hours}h ${minutes}m`);
      const genres = movie.genre;
      const genreArray = [];
      for (let genre in genres) {
        if (genres[genre] === true) {
          genreArray.push(genre);
        }
      }
      setmovieGenres(genreArray);
    }
  }, [movie]);

  const handleClick = () => {
    setPopup(false);
  };
  const handleAddtoMylist = async (e) => {
    e.preventDefault();
   await addToWatchlist(e.target.value);
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      {Popup ? (
        <header
          className="popup1"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundImage: `url("${Imgurl}")`,
          }}
        >
          <button
          
            style={{
              background: "transparent",
              fontSize: "35px",
              float: "right",
              border: "transparent",
            }}
            onClick={handleClick}
          >
            <MdCancel style={{color: "#C41E3A", width: "30px", marginTop: "-10px"}}/>
          </button>
          <div className="popup_content" >
            <h1 className="popup_title" style={{ display: "flex", justifyContent: "center", textAlign: "center", marginLeft: "0%"  }}>{movie?.MovieName}</h1>
            <h3 className="popup_title" style={{ fontSize: "25px", display: "flex", justifyContent: "center", textAlign: "center", marginLeft: "0%"  }}>
              {movie.isAdult ? "A" : "U/A"} &#8226; {Duration}
            </h3>
            <h3 className="popup_title" style={{ fontSize: "40px", display: "flex", justifyContent: "center", textAlign: "center", marginLeft: "0%" }}>
              #{movie?.rating} in Imdb
            </h3>
            {/* <div  className="popup_description">{movie?.title}</div> */}
            <div className="popup_buttons">
              <Link to={`movies/${movie._id} `}>
                <button className="popup_button">Play</button>
              </Link>
          <button className="banner_button" value={movie._id} onClick={handleAddtoMylist}> <IoMdAddCircle/> My list</button>
              {/* <button
                className="popup_button"
                value={movie._id}
                onClick={handleAddtoMylist}
              >
                + My list
              </button> */}
              <div
                className="popup_description"
                style={{ display: "flex", justifyContent: "left", textAlign: "center" }}
              >
                {movieGenres.map((genre) => (
                  <h5 key={genre}> {genre} | </h5>
                ))}
                <h5>
                  &nbsp;{movie?.language.charAt(0).toUpperCase() + movie?.language.substr(1).toLowerCase()} | <AiTwotoneStar style={{marginTop: "-5", color: "#FDCC0D"}}/> {movie?.rating}</h5>

              </div>
              {/* <hr class="solid"></hr> */}
              <div className="popup_description">{truncate(movie?.description, 300)}</div>
              
            </div>
          </div>
          <div className="popup_fadeBottom" />
        </header>
      ) : null}
    </>
  );
};

export default connect(null, { addToWatchlist })(withRouter(MovieDetailPopup));
