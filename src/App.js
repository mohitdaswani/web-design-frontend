import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPasswordChange from "./pages/ForgotPasswordChange";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ChangePhoneNoPage from "./pages/ChangePhoneNoPage";
import ChangeEmailPage from "./pages/ChangeEmailPage";
function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path="/user/register" component={RegisterPage} />
        <Route exact path="/user/Login" component={LoginPage} />
        <Route exact path="/user/forgotPassword" component={ForgotPasswordPage} />
        <Route exact path="/user/changePassword" component={ChangePasswordPage} />
        <Route exact path="/user/changePhoneNumber" component={ChangePhoneNoPage} />
        <Route exact path="/user/changeEmail" component={ChangeEmailPage} />
        <Route exact path="/user/forgot_password/:token" component={ForgotPasswordChange} />
        <Route
          exact
          path="/user/verify/:token"
          component={EmailVerificationPage}
        />
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
