import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import {withFirebase} from "./Firebase"
import { Routes } from '../constants/Routes'

const PasswordForgetPage = () => {
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
}

interface State {
    email: string
    firebase?: any,
    error: any
}

const INITIAL_STATE = {
    email: "",
    error: null
}

class PasswordForgetFormBase extends Component <{},State> {
    constructor (props:any){
        super(props)

        this.state = {...INITIAL_STATE}
    }
    onSubmit = (event:any) => {
        const {email} = this.state 

        this.props.firebase
        .doPasswordReset(email)
        .then(() => {
            this.setState({...INITIAL_STATE})
        })
        .catch((error:any) => {
            this.setState({error})
        })
        event.preventDefault()
    }
    
    onChange = (event:any) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render(){
        const {email, error} = this.state
        const isInvalid = email === ""

        return (
            <form onSubmit= {this.onSubmit}>
                <input 
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>
            </form>
        )
    }
}
const PasswordForgetLink = () => {
    <p>
        <Link to={Routes.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
}

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink}