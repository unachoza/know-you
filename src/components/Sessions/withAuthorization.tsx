import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import {withFirebase} from '../Firebase'
import { Routes } from "../../constants/Routes"



const withAuthorization = (condition:any) => (Component:any) => {
    class withAuthorization extends Component{
        componentDidMount(){
            this.listener =this.props.firebase.auth.onAuthStateChange(
                (authUser:any) => {
                    if(!condition(authUser)) {
                        this.props.history.push(Routes.SIGN_IN)
                    }
                }
            )
        }
        componentWillUnmount(){
            this.listener()
        }

        render() {
            return <Component {...this.props} />
        }
    }
    return compose(withRouter, withFirebase)(withAuthorization)
}

export default withAuthorization