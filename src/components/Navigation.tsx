import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Routes} from '../constants/Routes'


class Navigation extends Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to={Routes.SIGN_IN}>Sign In</Link>
                    </li>
                    <li>
                        <Link to={Routes.LANDING}>Landing</Link>
                    </li>
                    <li>
                        <Link to={Routes.HOME}>Home</Link>
                    </li>
                    <li>
                        <Link to={Routes.ACCOUNT}>Account</Link>
                    </li>
                    <li>
                        <Link to={Routes.ADMIN}>Admin</Link>
                    </li>
                    
                </ul>
            </div>
            )
        }
    }
    

export default Navigation