import React, { Component } from 'react'
import { Router, Route } from "react-router-dom"
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
import withAuthentication from './Sessions/withAuthentication'


export interface Props {
    username?: string,
    email?: string,
    password?: string
    error?: any,
    firebase?: any
}
export interface State {
    username: string,
    email: string,
    password: string
    error: any,
    firebase?: any, 
    history?: any
    // state:any
}

// interface State {
//     authUser?: any,
//     firebase?:any, 
//     listener?: any
// }
// interface Props {
//     firebase?:any,
//     listener?: any,
//     authUser?: any
// }

const App = () => {
    return (
        <Router history={history} >
            <Navigation authUser={this.state.authUser}/>
            <hr />
            <div style= {{textAlign: "center"}}>
                <Route exact path={Routes.LANDING} component={LandingPage} />
                <Route path={Routes.SIGN_UP} component={SignUpPage} />
                <Route path={Routes.SIGN_IN} component={SignInPage} />
                <Route path={Routes.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Route path={Routes.HOME} component={HomePage} />
                <Route path={Routes.ACCOUNT} component={AccountPage} />
                <Route path={Routes.ADMIN} component={AdminPage} />
            </div>
        </Router>
        )
 
}

export default withAuthentication(App)