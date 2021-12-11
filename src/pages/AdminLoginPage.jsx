import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../styles/registerPage.css"
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { loginAdmin} from "../redux/actions/adminAction";
import NavBar from "../components/NavBar";
import { Button } from "reactstrap";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please enter a valid email address."),
  password: Yup.string()
    .min(8, "password must be minimum length 0f 8!")
    .matches(/[a-z]/, "must have lowercase")
    .matches(/[A-Z]/, "must have uppercase")
    .matches(/[0-9]/, "must have number")
    .required("Required"),
});

class AdminLoginPage extends Component {
  state = {
    error: "",
  };

  handleSubmit = async (data) => {
    const { email, password } = data;
    const obj = { email, password };
console.log(this.props)
    const resp = await this.props.loginAdmin(obj);
    console.log(resp);
    if (resp.statusCode === 400) {
      console.log(resp.error);
      setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
      this.setState({ error: resp.error });
    } else if (resp.statusCode === 201) {
        await localStorage.setItem("admin",resp.token)
        this.props.history.push("/admin/adminDashboard");
      //this.props.history.push("/admin/addMovie");
    }
  };

  render() {
    const extrastyle={
      background:"black",
      margin:"200px 0px",
      padding:"0px 100px",
      width:"100%",
      color:"white"
    }
    return (
      <div className="pageLayout">
        <NavBar />
        <div className="boxstyle">
          <h1 style={{color:"white"}}>Sign In</h1>
          <br/>
          <i class="fas fa-user-cog"></i>
          <br />
          <br/>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={this.handleSubmit}
          >
            {({ errors, touched }) => (
              <Form style={{ display: "flex", flexDirection: "column",color:"#4267B2" }}>
                <Field style={{fontSize:"18px",padding:"10px",background: "white", color: "black" }} className="input" name="email" type="email" placeholder="Email"/>
                {errors.email && touched.email ? (
                  <p style={{ textAlign: "center", marginLeft: "8px" }}>{errors.email}</p>
                ) : <br/>}
               
                <Field style={{fontSize:"18px",padding:"10px",background: "white", color: "black" }} name="password" type="password" placeholder="Password" />
                {errors.password && touched.password ? (
                  <p style={{ textAlign: "center", marginLeft: "10px" }}>{errors.password}</p>
                ) : <br/>}
                {this.state.error ? <p>{this.state.error}</p> : null}
                <Button size="lg" style = {{ background: "#6495ED"}} type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </div>
        <Footer extrastyle={extrastyle}/>
      </div>
    );
  }
}
export default connect(null, { loginAdmin })(AdminLoginPage);
