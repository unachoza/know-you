import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {compose } from 'recompose'
import {SignUpLink} from './SignUp'
import {withFirebase} from './Firebase'
import { Routes } from '../constants/Routes'
import history from '../history'

import SignUpPage from './SignUp'

class SignIn extends Component{
    render(){
        return(
            <div>
                <h1>SignIn</h1>
                <SignUpPage {...this.state} />
                <SignUpLink/>
            </div>
        )
    }
}

export default SignIn 

interface State {
    email: string,
    password: string, 
    error?: {
        message: string
    },
    firebase?: any,
}
interface Props{
    email: string,
    password: string, 
    error?: {
        message?: any
    },
    firebase?: any,
}

const INITIAL_STATE ={
    email: "",
    password: "",
    error: null,
    firebase: {}
}
class SignInFormBase extends Component<State, Props> {
    constructor(props:any){
        super(props)

        this.state = {...INITIAL_STATE}
    }
    onSubmit = (event:any) => {
        const {email, password} = this.state

        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(()=> {
            this.setState({...INITIAL_STATE})
            this.props.history.push(Routes.HOME)
        })
        .catch((error:any) => {
            this.setState({error})
        })
        event.preventDefault()
    }
}