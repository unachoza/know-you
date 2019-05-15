import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {compose } from 'recompose'
import {SignUpLink} from './SignUp'
import {PasswordForgetLink} from './PasswordForget'
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
                <PasswordForgetLink /> 
                <SignUpLink/>
            </div>
        )
    }
}



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

    onChange =(event:any) => {
        this.setState({ [event.target.name]: event.tartget.value})
    }
    render(){
        const {email, password, error} = this.state
        const isInvalid = password === "" || email === ""

        return(
            <form onSubmit={this.onSubmit}>
            <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            />
            <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password" 
            placeholder="Password"
            />
             <button type="submit"> {/*disable={isInvalid} */}
                Sign In
            </button>

            {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase)

export default SignIn 

export {SignInForm}