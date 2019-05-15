import React, {Component} from 'react'
import {withFirebase} from './Firebase'

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

const INITIAL_STATE ={
    passwordOne: "",
    passwordTwo: "",
    error: null, 
    firebase: {}

}

class PasswordChangeFrom extends Component< State, Props> {
    constructor(props: any){
        super(props)

        this.state = {...INITIAL_STATE}
        
    }

    onSubmit = (event:any) => {
        const {passwordOne} = this.state

        this.props.firebase 
        .doPasswordUpdate(passwordOne)
        .then(() => {
            this.setState({...INITIAL_STATE})
        })
        .catch((error: any) => {
            this.setState({ error })
        })
        event.preventDefault()
    }
    
    onChange = (event:any) => {
        this.setState({ [event.target.name]: event.target.name})
    }

    render(){
        const { passwordOne, passwordTwo, error} = this.state

        const isInvalid = 
        passwordOne !== passwordTwo || passwordOne === ""

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                   <input 
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                <button disabled={isInvalid} type="submit">
                Reset My Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}
export default withFirebase(PasswordChangeFrom)