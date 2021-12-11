import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../redux/actions/adminAction";
import { withRouter, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/adminForm.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Input } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


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
    if (response) {
      if (response.statusCode === 201) {
        this.setState({ status: "uploaded" })
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }
    }
  };
  // checked file type and working on windows for choosefile
  render() {
    const style = {
      background: "black",
      height: "70px"
    }
    const admin = localStorage.getItem("admin");
    return (
      <>
        {admin ?
          <>
            <NavBar extrastyle={style} />

            {/* <React.Fragment>
              <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    dummy
                  </Grid>
                  <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'right' }}>
                    <label>Movie Name</label>
                  </Grid>
                  <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'left' }}>
                  <Input placeholder="Movie Name" style={{ width: 400 }} />
                  
                  </Grid>
                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    fhgf
                  </Grid>
                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    dummt
                  </Grid>
                  <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'right' }}>
                    <label>Title</label>
                  </Grid>
                  <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'left' }}>
                  <Input placeholder="Movie Subpart" style={{ width: 400 }} />
                  </Grid>
                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    fhgf
                  </Grid>

                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    dummt
                  </Grid>
                  <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'right' }}>
                    <label>Description</label>
                  </Grid>
                  <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'left' }}>
                  <TextareaAutosize
                    maxRows={4}
  aria-label="maximum height"
  placeholder="Movie's plot"
  defaultValue="Movie's plot"
  style={{ width: 400 }}
/>
                  
                  </Grid>
                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    fhgf
                  </Grid>

                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    dummt
                  </Grid>
                  <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'right' }}>
                  <label>Languages</label>
                  </Grid>
                  <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'left' }}>
                  const languages = [
  {
    value: "english",
    label: 'English',
  },
  {
    value: 'hindi',
    label: 'Hindi',
  },
 
];

export default function SelectTextFields() {
  const [language, setLanguage] = React.useState('english');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-language"
          select
          label="Select"
          value={language}
          onChange={handleChange}
          helperText="Please select your language"
        >
          {languages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
      </div>
      
      
    </Box>
  );
}

                  
                  </Grid>
                  <Grid item xs={12} md={2} style={{visibility: 'hidden'}}>
                    fhgf
                  </Grid>


                </Grid>
              </Box>
            </React.Fragment> */}

            {this.state.status !== "uploaded" ? (
              <div style={{ margin: "auto", background: "#36486b", }}>
                <div id="admin-bg">

                  <div id="container">
                    <h2 style={{ margin: "10px 0 10px 0", padding: "20px ", color: "white" }}>Add Movie Details</h2>
                    {/* <hr /> */}
                    <h5 style={{color: "white" }}>Name</h5>
                    <input
                      onChange={this.handleChange}
                      value={this.state.MovieName}
                      type="text"
                      name="MovieName"
                      class="box-style"
                      placeholder="Movie Name"
                  
                     //required
                    />
                    <h5 style={{ color: "white" }}>Title</h5>
                    <input
                      onChange={this.handleChange}
                      value={this.state.title}
                      type="text"
                      name="title"
                      class="box-style"
                      placeholder="Movie Subpart"
                    // required
                    />
                    <h5 style={{ color: "white" }}>Description</h5>
                    <textarea
                      onChange={this.handleChange}
                      value={this.state.description}
                      name="description"
                      // required
                      rows="3"
                      cols="24"
                      class="box-style"
                      placeholder="Movie plot"
                    ></textarea>
                    <br />< br />
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                      <h5 style={{ color: "white", paddingRight:"10px" }}>Languages</h5>
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
                      <option defaultValue style={{ color: "black" }}>Choose Language</option>
                      <option value="english" style={{ color: "black" }}>English</option>
                      <option value="hindi" style={{ color: "black" }}>Hindi</option>
                    </select>
                    <br /><br />
                    <h5 style={{ color: "white" }}>Poster Image</h5>
                    <input
                      onChange={this.handleChange}
                      // value={this.state.posterImage}
                      type="file"
                      // required
                      // type="text"
                      class="box-style"
                      style={{ paddingBottom: "10px" }}
                      name="posterImage"
                    />
                    <h5 style={{ color: "white" }}>Background Image</h5>
                    <input
                      onChange={this.handleChange}

                      // value={this.state.posterImage}
                      type="file"
                      // required
                      // type="text"
                      style={{ paddingBottom: "10px" }}
                      class="box-style"
                      name="backgroundImage"
                    />
                    <div    >
                      <h5 style={{ color: "white" }}>Release Status</h5>
                      <div style={{ justifyContent:"center",display: "flex" }}>
                        <input
                          onChange={this.handleChange}
                          value={this.state.isReleased}
                          type="checkbox"
                          name="isReleased"
                          style={{ position:"relative",display: "inline", float:'left' }}
                        />
                        <label htmlFor="isReleased" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>is Released</label>
                      </div>

                    </div>
                    <h5 style={{ color: "white" }}>Movie</h5>
                    <input
                      onChange={this.handleChange}
                      // value={this.state.movie}
                      type="file"
                      // type="text"
                      // required
                      class="box-style"
                      name="movie"
                    />
                    <h5 style={{ color: "white" }}>Date</h5>
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
                    <h5 style={{ color: "white" }}>Movie Type</h5>
                    <div style={{ justifyContent:"center",display: "flex" }}>
                      
                      <input
                        onChange={this.handleChange}
                        value={this.state.isAdult}
                        type="checkbox"
                        name="isAdult"
                        style={{ position:"relative",display: "inline", float:'left' }}
                      />
                      <label htmlFor="isAdult" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>is Adult</label>
                    </div>
                    <div style={{ justifyContent:"center",display: "flex" }}>
                      <input
                        onChange={this.handleChange}
                        value={this.state.isPaid}
                        type="checkbox"
                        name="isPaid"
                        style={{ position:"relative",display: "inline", float:'left' }}
                      />
                      <label htmlFor="isPaid" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>is Paid</label>
                    </div>
                    <h5 style={{ color: "white" }}>Rating</h5>
                    <input
                      onChange={this.handleChange}
                      value={this.state.rating}
                      type="number"
                      // required
                      name="rating"
                      class="box-style"
                      placeholder="IMDB Rating"
                    // required
                    />
                    <h5 style={{ color: "white" }}>Run Time</h5>
                    <input
                      onChange={this.handleChange}
                      value={this.state.runTime}
                      type="number"
                      name="runTime"
                      class="box-style"
                      placeholder="Total time"
                    // required
                    />
                    <h5 style={{ color: "white" }}>Country</h5>
                    <input
                      onChange={this.handleChange}
                      value={this.state.country}
                      type="text"
                      name="country"
                      class="box-style"
                      placeholder="Country Name"
                    // required
                    />
                    <br /><br />
                    <div style={{ textAlign: "center" }}>
                      <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                        <h5 style={{ color: "white" }}>Genre</h5>
                      </label>
                      <div style={{ justifyContent:"center",display: "flex" }}>
                        <input
                          onChange={this.handleChange}
                          value={this.state.Action}
                          type="checkbox"
                          name="Action"
                          style={{ position:"relative",display: "inline", float:'left' }}

                        />
                        <label htmlFor="Action" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>Action</label>
                      </div>
                      <div style={{ justifyContent:"center",display: "flex" }}>
                        <input
                          onChange={this.handleChange}
                          value={this.state.Adventure}
                          type="checkbox"
                          name="Adventure"
                          style={{ position:"relative",display: "inline", float:'left' }}
                        />
                        <label htmlFor="Adventure" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>Adventure</label>
                      </div>
                      <div style={{ justifyContent:"center",display: "flex" }}>
                        <input
                          onChange={this.handleChange}
                          value={this.state.Comedy}
                          type="checkbox"
                          name="Comedy"
                          style={{ position:"relative",display: "inline", float:'left' }}
                        />
                        <label htmlFor="Comedy" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>Comedy</label>
                      </div>
                      <div style={{ justifyContent:"center",display: "flex" }}>
                        <input
                          onChange={this.handleChange}
                          value={this.state.Drama}
                          type="checkbox"
                          name="Drama"
                          style={{ position:"relative",display: "inline", float:'left' }}
                        />
                        <label htmlFor="Drama" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>Drama</label>
                      </div>
                      <div style={{ justifyContent:"center",display: "flex" }}>
                        <input
                          onChange={this.handleChange}
                          value={this.state.Horror}
                          type="checkbox"
                          name="Horror"
                          style={{ position:"relative",display: "inline", float:'left' }}
                        />
                        <label htmlFor="Horror" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>Horror</label>
                      </div>
                      <div style={{ justifyContent:"center",display: "flex" }}>
                        <input
                          onChange={this.handleChange}
                          value={this.state.Thriller}
                          type="checkbox"
                          name="Thriller"
                          style={{ position:"relative",display: "inline", float:'left' }}
                        />
                        <label htmlFor="Thriller" style={{ color: "white", display: "block",float:'left', paddingTop:'10px', paddingLeft:'10px' }}>Thriller</label>
                      </div>
                    </div>
                    <br /><br />
                    <input type="submit" onClick={this.handleSubmit} value="Submit" style={{ background: "#6495ED", marginBottom: "60px", width: "10em" }} />
                  </div>

                </div>

              </div>) : <h2 style={{ color: "white" }}>uploaded...</h2>}
          </>
          : (
            <Redirect to="/admin/login" />
          )}
      </>
    );
  }
}

export default connect(null, { addMovie })(withRouter(AddProductPage));
