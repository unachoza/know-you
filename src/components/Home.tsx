import React, {Component} from 'react'
import {withAuthoriztion} from './Sessions'

const Home = () => {
    <div>
        <h1>Home Page</h1>
        <p>The Home Page is accesible to every signed in user</p>
    </div>
}
const condition = authUser => !!authUser

export default withAuthoriztion(condition)(Home)