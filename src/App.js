import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import ContestHome from "./components/ContestHome";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";
import  D11Dashboard  from "./components/D11Dashboard";

const App = () => {
  

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/d11-app"} className="navbar-brand">
            Fantasy League
          </Link>
          <div className="navbar-nav mr-auto">
            {currentUser && (
              <li className="nav-item">
                <Link to={"/d11-app/home"} className="nav-link">
                  Home
                </Link>
              </li>
            )}
          </div>


          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/d11-app/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/d11-app/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/d11-app/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/d11-app/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>

            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/d11-app", "/d11-app/home"]} component={Home} />
            <Route exact path="/d11-app/login" component={Login} />
            <Route exact path="/d11-app/register" component={Register} />
            <Route exact path="/d11-app/profile" component={Profile} />
            <Route path="/d11-app/user" component={BoardUser} />
            <Route path="/d11-app/contest" component={ContestHome} />
            <Route path="/d11-app/dashboard/:leagueId" component={D11Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
