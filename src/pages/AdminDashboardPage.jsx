import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../redux/actions/adminAction";
import { withRouter, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";

import "../styles/adminForm.css";
import AddProductPage from "./AddProductPage";

class AdminDashboard extends Component {
  state = {
    response: false,
    MovieName: "",
    title: "",
    description: "",
    language: "",
    posterImage: "",
    backgroundImage: "",
    country: "",
    isReleased: false,
    isPaid: false,
    rating: "",
    releasedDate: "",
    movie: "",
    isAdult: false,
    runTime: "",
    Action: false,
    Adventure: false,
    Comedy: false,
    Drama: false,
    Horror: false,
    Thriller: false,
    status: "",
  };
  handleChange = async (e) => {
    if (e.target.type === "file") {
      await this.setState({ [e.target.name]: [...e.target.files][0] });
    } else if (e.target.type === "checkbox") {
      await this.setState({ [e.target.name]: e.target.checked });
    } else {
      await this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleSubmit = async () => {
    const genre = {
      Action: this.state.Action,
      Adventure: this.state.Adventure,
      Comedy: this.state.Comedy,
      Drama: this.state.Drama,
      Horror: this.state.Horror,
      Thriller: this.state.Thriller,
    };
    const fd = new FormData();
    fd.append("MovieName", this.state.MovieName);
    fd.append("title", this.state.title);
    fd.append("description", this.state.description);
    fd.append("language", this.state.language);
    fd.append("posterImage", this.state.posterImage);
    fd.append("backgroundImage", this.state.backgroundImage);
    fd.append("isReleased", this.state.isReleased);
    fd.append("releasedDate", this.state.releasedDate);
    fd.append("movie", this.state.movie);
    fd.append("country", this.state.country);
    fd.append("isAdult", this.state.isAdult);
    fd.append("isPaid", this.state.isPaid);
    fd.append("runTime", this.state.runTime);
    fd.append("rating", this.state.rating);
    fd.append("genre", await JSON.stringify(genre));
    console.log(fd, this.props.addMovie);

    const response = await this.props.addMovie(fd);
    console.log(response);
if(response){
  if(response.statusCode===201){
    this.setState({status:"uploaded"})
    setTimeout(() => {
      window.location.reload(false)
    }, 1000);
  }
}
  };
// checked file type and working on windows for choosefile
  render() {
    const style={
      background:"black",
      height: "70px"
    }
    const admin = localStorage.getItem("admin");
    return (
      <>
    {admin?
    <>
        <NavBar extrastyle={style} />
        

        {this.state.status!=="uploaded" ? (
          <div style={{ margin: "auto", background: "#36486b"}}>
            <div id="admin-bg">

            <AddProductPage/>
            
            </div>
            
          </div>):<h1>uploaded...</h1>}
</>
        : (
          <Redirect to="/admin/login" />
        )}
      </>
    );
  }
}

export default connect(null, { addMovie })(withRouter(AdminDashboard));

