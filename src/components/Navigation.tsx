import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Routes} from '../constants/Routes'
import SignOutButton from './SignOut'
import {AuthUserContext} from './Sessions'


const Navigation = () => {
    return (
        <div>
            <AuthUserContext.Consumer>
                {authUser => 
                    authUser ? <NavigationAuth/> : <NavigationNonAuth/>
                }
            </AuthUserContext.Consumer>
        </div>
    )
}       

export const NavigationAuth = () => {
    return (
            <ul style = {{display: "flex", flexDirection: 'row',listStyleType: "none" }}>
                <li style={{ margin: 10}}>
                    <Link to={Routes.SIGN_IN}>Sign In</Link>
                </li>
                <li style={{ margin: 10}}>
                    <Link to={Routes.LANDING}>Landing</Link>
                </li>
                <li style={{ margin: 10}}>
                    <Link to={Routes.HOME}>Home</Link>
                </li>
                <li style={{ margin: 10}}>
                    <Link to={Routes.ACCOUNT}>Account</Link>
                </li>
                <li style={{ margin: 10}}>
                    <Link to={Routes.ADMIN}>Admin</Link>
                </li>
                <li style={{ margin: 10}}>
                    <SignOutButton />
                </li>
            </ul>
            )
    }

const NavigationNonAuth = () => {
    return (
        <ul>
            <li>
                <Link to={Routes.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={Routes.HOME}>Home</Link>
            </li>
            <li>
                <Link to={Routes.SIGN_IN}>Sign in</Link>
            </li>
            <li>
                <Link to={Routes.ADMIN}>Admin</Link>
            </li>
        </ul>
    )
}
    

export default Navigation