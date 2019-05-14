import React, {Component} from 'react'
import SignUpPage from './SignUp'

class SignIn extends Component{
    render(){
        return(
            <div>
                <h1>SignIn</h1>
                <SignUpPage {...this.state} />


            </div>
        )
    }
}

export default SignIn 