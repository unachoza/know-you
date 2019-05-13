import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom"
import Navigation from './Navigation'
import history from '../history'
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import AdminPage from './Admin';
import { Routes } from "../constants/Routes";

class App extends Component {
    render(){
        return (
            <Router history={history}>
            <Navigation/>
            <hr />

      <Route exact path={Routes.LANDING} component={LandingPage} />
      <Route path={Routes.SIGN_UP} component={SignUpPage} />
      <Route path={Routes.SIGN_IN} component={SignInPage} />
      <Route path={Routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={Routes.HOME} component={HomePage} />
      <Route path={Routes.ACCOUNT} component={AccountPage} />
      <Route path={Routes.ADMIN} component={AdminPage} />
            </Router>
        )
    }
    
          
            // <div>
            //     <h1>Application</h1>
            // </div>
   
}

export default App