import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Routes} from '../constants/Routes'


class Navigation extends Component {
    render(){
        return(
            <div >
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
                    
                </ul>
            </div>
            )
        }
    }
    

export default Navigation