import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../redux/actions/adminAction";
import { withRouter, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/adminForm.css";

class AddProductPage extends Component {
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

            <div id="container">
              <h1 style={{margin: "60px 0 10px 0", padding: "40px 20px ", color:"white"}}>Add Movie Details</h1>
              <hr />
              <h4 style={{ paddingTop: "30px",  color:"white"}}>Name</h4>
              <input 
                onChange={this.handleChange}
                value={this.state.MovieName}
                type="text"
                name="MovieName"
                class="box-style"
                // required
              />
              <h4 style={{ color:"white"}}>Title</h4>
              <input 
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                name="title"
                class="box-style"
                // required
              />
              <h4 style={{ color:"white"}}>Description</h4>
              <textarea
                onChange={this.handleChange}
                value={this.state.description}
                name="description"
                // required
                rows="3"
                cols="30"
                class="box-style"
              ></textarea>
              <br />< br />
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                <h4 style={{ color:"white"}}>Languages</h4>
              </label>
              <select
                onChange={this.handleChange}
                value={this.state.language}
                className="custom-select mr-sm-2"
                name="language"
                // required
                class="box-style"
                id="inlineFormCustomSelect"
              >
                <option defaultValue style={{ color:"white"}}>Choose Language</option>
                <option value="english" style={{ color:"white"}}>English</option>
                <option value="hindi" style={{ color:"white"}}>Hindi</option>
              </select>
              <br /><br />
              <h4 style={{ color:"white"}}>Poster Image</h4>
              <input
                onChange={this.handleChange}
                // value={this.state.posterImage}
                type="file"
                // required
                // type="text"
                class="box-style"
                style={{paddingBottom:"10px"}}
                name="posterImage"
              />
              <h4 style={{ color:"white"}}>Background Image</h4>
              <input
                onChange={this.handleChange}
                
                // value={this.state.posterImage}
                type="file"
                // required
                // type="text"
                class="box-style"
                name="backgroundImage"
              />
              <div>
              <h4 style={{ color:"white"}}>Release Status</h4>
              <div>
              <input 
                  onChange={this.handleChange}
                  value={this.state.isReleased}
                  type="checkbox"
                  name="isReleased"
                />
                <label htmlFor="isReleased" style={{ color:"white", display:"inline-block"}}>is Released</label>
              </div>
                
              </div>
              <h4 style={{ color:"white"}}>Movie</h4>
              <input
                onChange={this.handleChange}
                // value={this.state.movie}
                type="file"
                // type="text"
                // required
                class="box-style"
                name="movie"
              />
              <h4 style={{ color:"white"}}>Date</h4>
              <input 
                onChange={this.handleChange}
                value={this.state.releasedDate}
                type="date"
                id="start"
                class="box-style"
                // required
                name="releasedDate"
                min="2018-01-01"
                max="2021-12-31"
              />
              <div>
                <h4 style={{ color:"white"}}>Movie Type</h4>
                <input 
                  onChange={this.handleChange}
                  value={this.state.isAdult}
                  type="checkbox"
                  name="isAdult"
                />
                <label htmlFor="isAdult" style={{ color:"white"}}>is Adult</label>
              </div>
              <div>
                <input 
                  onChange={this.handleChange}
                  value={this.state.isPaid}
                  type="checkbox"
                  name="isPaid"
                />
                <label htmlFor="isPaid" style={{ color:"white"}}>is Paid</label>
              </div>
              <h4 style={{ color:"white"}}>Rating</h4>
              <input 
                onChange={this.handleChange}
                value={this.state.rating}
                type="number"
                // required
                name="rating"
                class="box-style"
                // required
              />
              <h4 style={{ color:"white"}}>Run Time</h4>
              <input 
                onChange={this.handleChange}
                value={this.state.runTime}
                type="number"
                name="runTime"
                class="box-style"
                // required
              />
              <h4 style={{ color:"white"}}>Country</h4>
              <input 
                onChange={this.handleChange}
                value={this.state.country}
                type="text"
                name="country"
                class="box-style"
                // required
              />
              <br /><br />
              <div style={{textAlign:"center" }}>
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                  <h4 style={{ color:"white"}}>Genre</h4>
                </label>
                <div>
                  <input 
                    onChange={this.handleChange}
                    value={this.state.Action}
                    type="checkbox"
                    name="Action"
                    
                  />
                  <label htmlFor="Action" style={{ color:"white"}}>Action</label>
                </div>
                <div>
                  <input 
                    onChange={this.handleChange}
                    value={this.state.Adventure}
                    type="checkbox"
                    name="Adventure"
                  />
                  <label htmlFor="Adventure" style={{ color:"white"}}>Adventure</label>
                </div>
                <div>
                  <input 
                    onChange={this.handleChange}
                    value={this.state.Comedy}
                    type="checkbox"
                    name="Comedy"
                  />
                  <label htmlFor="Comedy" style={{ color:"white"}}>Comedy</label>
                </div>
                <div>
                  <input 
                    onChange={this.handleChange}
                    value={this.state.Drama}
                    type="checkbox"
                    name="Drama"
                  />
                  <label htmlFor="Drama" style={{ color:"white"}}>Drama</label>
                </div>
                <div>
                  <input 
                    onChange={this.handleChange}
                    value={this.state.Horror}
                    type="checkbox"
                    name="Horror"
                  />
                  <label htmlFor="Horror" style={{ color:"white"}}>Horror</label>
                </div>
                <div>
                  <input 
                    onChange={this.handleChange}
                    value={this.state.Thriller}
                    type="checkbox"
                    name="Thriller"
                  />
                  <label htmlFor="Thriller" style={{ color:"white"}}>Thriller</label>
                </div>
              </div>
              <br /><br />
              <input  type="submit" onClick={this.handleSubmit} value="submit" style = {{ background: "#6495ED", marginBottom: "60px", width:"10em"}} />
              </div>
            
            </div>
            
          </div>):<h1 style={{ color:"white"}}>uploaded...</h1>}
</>
        : (
          <Redirect to="/admin/login" />
        )}
      </>
    );
  }
}

export default connect(null, { addMovie })(withRouter(AddProductPage));
