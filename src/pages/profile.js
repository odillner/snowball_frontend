import React, {useState, useEffect} from 'react'
import userService from '../services/users'

const Profile = (props) => {
    const [user, setUser] =  useState({})

    useEffect(() => {
        setCurrentUser(props.id)
    }, [])

    const setCurrentUser = async (id) => {
        const res = await userService.read(id)

        setUser(res)
    }

    return (
        <div>
            <h1>profile</h1>
            <h1>username: {user.name} </h1>
            <h1>email: {user.email} </h1>
            <h1>password: {user.password} </h1>

        </div>
    )
}

export default Profile
