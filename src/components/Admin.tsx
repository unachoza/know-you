import React, {Component} from 'react'
import * as Roles from "../constants/Roles"
import {withAuthorization} from './Sessions'

const AdminPage = () => {
    <div>
        <h1>Admin</h1>
        <p>Restricted Area! Only users with the admin roles are authorized</p>
    </div>
}

const condition = authUser => authUser && !!authUser.roles[Roles.ADMIN]

export default withAuthorization(condition)(AdminPage)


