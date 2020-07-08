import React, {useState, useEffect} from 'react'
import userService from '../services/users'

const Profile = (props) => {
    const [user, setUser] =  useState({})

    useEffect(() => {
        if (props.id) {
            setCurrentUser(props.id)
        } else if (props.user) {
            setUser(props.user)
        }
    }, [])

    const setCurrentUser = async (id) => {
        const res = await userService.read(id)

        setUser(res)
    }

    return (
        <div className='profile'>
            <h1>profile</h1>
            <h1>username: {user.username} </h1>
            <h1>email: {user.email} </h1>
            <h1>id: {user.id} </h1>
        </div>
    )
}

export default Profile
