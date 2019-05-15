import React from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import {withFirebase} from '../Firebase'
import { Routes } from "../../constants/Routes"
import AuthUserContext from './context'


const withAuthorization:any = (condition:any) => (Component:any) => {
    class WithAuthorization extends Component<{} >{
        componentDidMount(){
            this.listener =this.props.firebase.auth.onAuthStateChanged(
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
            return(
                <AuthUserContext.Consumer>
                    {authUser => 
                    condition(authUser)?  <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            )
           
        }
    }
    return compose(
        withRouter,
        withFirebase,
      )(WithAuthorization as any)
}

export default withAuthorization