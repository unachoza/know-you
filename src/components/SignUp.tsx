import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Firebase, {FirebaseContext} from './Firebase/context'
import { Routes } from '../constants/Routes';

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
    firebase?: any
}
const INITIAL_STATE = {
    username : '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    firebase: {}
  };

class SignUpForm extends Component<State, Props>{
    constructor(props:any){
        super(props)
        this.state = {...INITIAL_STATE}
    }
    onSubmit = (event:any) => {
        const {username, email, passwordOne} = this.state
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then((authUser:any) => {
            this.setState({...INITIAL_STATE})
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
                />
                <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                />
                <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                />
                <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
                />
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

const SignUpPage = () => {
    return (
     <div>
         <h1>Sign Up</h1>
         <FirebaseContext.Consumer>
         {(firebase:any) => <SignUpForm {...this.state} firebase={firebase} /> }
         </FirebaseContext.Consumer>
     </div>
    )
 }
 