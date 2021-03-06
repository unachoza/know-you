import React, {Component} from 'react'
import {withAuthorization} from './Sessions'

const Home = () => {
    return (<div>
        <h1>Home Page</h1>
        <p>The Home Page is accesible to every signed in user</p>
    </div>
    )
}
const condition = (authUser: {}) => !!authUser

export default withAuthorization(condition)(Home)