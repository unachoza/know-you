import React, {Component} from 'react'
import * as Roles from "../constants/Roles"
import {withAuthorization} from './Sessions'
import {withFirebase} from './Firebase'

interface State {
    loading: boolean,
    users: any,
    firebase: {
        users: any
    }, 
}

interface Props {
    firebase: {
        users: any
    }, 
    users?: any,
    loading: boolean,
}

class AdminPage extends Component < State, Props> {
    constructor(props:any){ 
        super(props)

       this.state= {
            loading: false, 
            users: [],
            firebase: {
                users: ""
            }
        }
    }   
    componentDidMount(){
        this.setState({loading:true})

        this.props.firebase.users().on('value', (snapshot:any) => {
            const usersObject = snapshot.val()
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key
            }))

            this.setState({
                users: usersList,
                loading: false
            })
        })
    }

    componentWillUnmount(){
        this.props.firebase.users().off()
    }

    render(){
        const { users, loading } = this.state

        return(
            <div>
                <h1>Admin</h1>
                {loading && <div>Loading ...</div>}
                <UserList users={users} />
            </div>
        )
    }
}
declare var users: []

const UserList = ({users: {}}) => {
    return (
        <ul>
            {users.map((user:any) => {
                <li key={user.uid}>
                <span>
                    <strong>ID:</strong> {user.uid}
                </span>
                <span>
                    <strong>E-mail:</strong> {user.email}
                </span>
                <span>
                    <strong>Username:</strong> {user.username}
                </span>
                </li>
            })}
        </ul>
    )
}

export default withFirebase(AdminPage)


// const condition = authUser => authUser && !!authUser.roles[Roles.ADMIN]

// export default withAuthorization(condition)(AdminPage)


