import React, { Component } from 'react'
import AuthUserContext from './context';
import { withFirebase } from '../Firebase'

const withAuthentication = (Component:any)  => {
    class withAuthentication extends Component {
        constructor(props:any) {
            super(props)
    
            this.state ={ 
                authUser: null
            }
        }
        
        componentDidMount(){
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                (authUser:any) => {
                authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null })
            })
        }
        componetWillUnmount (){
            this.listener()
        }
        render(){
            <AuthUserContext.Provider value={this.state.authUser}>
            return <Component {...this.props} />
            </AuthUserContext.Provider>
        }
    }

    return withFirebase(withAuthentication)
}

export default withAuthentication