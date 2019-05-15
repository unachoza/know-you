import React from 'react'
import {PasswordForgetForm} from './PasswordForget'
import PasswordChangeForm from './PasswordChange'
import {withAuthorization, AuthUserContext} from './Sessions'


const AccountPage = () => {
    return <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account Page</h1>
                <PasswordForgetForm />
                <PasswordChangeForm/>
            </div>
        )}
    </AuthUserContext.Consumer>
   
}
const condition = (authUser:{}) => !!authUser

export default withAuthorization(condition)(AccountPage)