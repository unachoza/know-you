import React from 'react'
import {withFirebase} from "./Firebase"

interface firebase {
    firebase:any
}

const SignOutButton = ({firebase}: firebase) => {
    return (
        <button type="button" onClick={firebase.doSignOut}>
        SignOut
        </button>
    )
}

export default withFirebase(SignOutButton)