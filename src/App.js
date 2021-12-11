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
import AccountPage from "./pages/AccountPage";



// Krishna's addition
import HomePage from "./pages/HomePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AddProductPage from "./pages/AddProductPage";
import LatestPage from "./pages/LatestPage";
import MoviePlayerPage from "./pages/MoviePlayerPage";
import MoviesPage from "./pages/MoviesPage";
import MylistPage from "./pages/MylistPage";
import RazorpayPage from "./pages/RazorpayPage";
import SearchPage from "./pages/SearchPage";
import SubscriptionPlanPage from "./pages/SubscriptionPlanPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import DeleteMoviePage from "./pages/DeleteMoviePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/user/register" component={RegisterPage} />
        <Route exact path="/movies/language/" component={MoviesPage} />
        <Route exact path="/user/Login" component={LoginPage} />
        <Route exact path="/admin/login" component={AdminLoginPage} />
        <Route exact path="/admin/addMovie" component={AddProductPage} />
        <Route exact path="/admin/adminDashboard" component={AdminDashboardPage} />
        <Route exact path="/admin/deleteMovie" component={DeleteMoviePage} />
        <Route
          exact
          path="/admin/adminDashboard"
          component={AdminDashboardPage}
        />
        <Route
          exact
          path="/user/forgotPassword"
          component={ForgotPasswordPage}
        />
        <Route
          exact
          path="/user/changePassword"
          component={ChangePasswordPage}
        />
        <Route
          exact
          path="/user/changePhoneNumber"
          component={ChangePhoneNoPage}
        />
        <Route exact path="/user/changeEmail" component={ChangeEmailPage} />
        <Route
          exact
          path="/user/forgot_password/:token"
          component={ForgotPasswordChange}
        />
        <Route
          exact
          path="/user/verify/:token"
          component={EmailVerificationPage}
        />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/latest" component={LatestPage} />
        <Route exact path="/mylist" component={MylistPage} />
        <Route exact path="/movies/:MovieId" component={MoviePlayerPage} />
        <Route
          exact
          path="/movies/movies/:MovieId"
          component={MoviePlayerPage}
        />

        <Route exact path="/razorpay/:orderId" component={RazorpayPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route
          exact
          path="/subscriptionPlans"
          component={SubscriptionPlanPage}
        />
        <Route exact path="/yourAccount" component={AccountPage} />
        {/* <Redirect to="/"/> */}
      </Switch>
    </div>
  );
}

export default App;
