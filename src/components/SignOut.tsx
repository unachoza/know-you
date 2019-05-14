import React, {Component} from 'react'
import {withFirebase} from "./Firebase"

interface firebase {
    firebase:any
}

const SignOutButton = ({firebase}) => {
    <button type="button" onClick={firebase.doSignOut}>
    SignOut
    </button>
}

export default withFirebase(SignOutButton)