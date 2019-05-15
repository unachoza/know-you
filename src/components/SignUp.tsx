import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {withFirebase} from './Firebase/context'
import { Routes } from '../constants/Routes';
import { compose} from 'recompose'
import history from '../history'

class SignUpPage extends Component<{},State>{
    render(){
        return (
        <div>
            <h1>Sign Up</h1>
             <SignUpForm {...this.state} /> 
            
        </div>
        )
    }
    
 }

export interface Props {
    username?: string,
    email?: string,
    passwordOne?: string,
    passwordTwo?: string,
    error?: any,
    firebase?: any
}
export interface State {
    username: string,
    email: string,
    passwordOne: string,
    passwordTwo: string,
    error: any,
    firebase?: any, 
    history?: any
    // state:any
}
const INITIAL_STATE = {
    username : '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    firebase: {}
  };

class SignUpFormBase extends Component<State, Props>{
    constructor(props:any){
        super(props)
        this.state = {...INITIAL_STATE}
    }
    onSubmit = (event:any) => {
        const {username, email, passwordOne} = this.state

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then((authUser:any) => {
            //Creat a user in your Firebase realitime database
            return this.props.firebase
            .user(authUser.user.uid)
            .set({
                    username, 
                    email
                })
            })
            .then(() => {
                this.setState({...INITIAL_STATE})
                this.props.history.push(Routes.HOME)
            })
            .catch((error:any) => {
                this.setState({error})
            })

            event.preventDefault()
    }

    onChange = (event:any) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        const  {username, email, passwordOne, passwordTwo, error } = this.state

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

        return(
            <form onSubmit={this.onSubmit}>
                <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
                /> <br/>
                <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                /><br/>
                <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                /><br/>
                <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
                /><br/>
                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}

            </form>
        )
    }
}
 
const SignUpLink = () => {
    return(
        <p>
        Don't have an account? <Link to={Routes.SIGN_UP}>Sign Up</Link>
    </p>
    )
}

export {SignUpForm, SignUpLink} 

const SignUpForm = compose (withRouter, withFirebase)(SignUpFormBase)


 export default SignUpPage
 