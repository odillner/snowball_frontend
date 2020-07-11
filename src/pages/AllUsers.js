import React, {useState, useEffect} from 'react'
import userService from '../services/users'
import Profile from '../components/Profile'

const AllUsers = (props) => {
    const {users} = props.state

    if (users) {
        if (users[0])
            return (
                <div>
                    {users.map(user => {
                        return (
                            <Profile.Full user={user} key={user.username}/>
                        )
                    })}
                </div>
            )
    }

    return (
        <div/>
    )
}

export default AllUsers
