import React, {useState, useEffect} from 'react'
import userService from '../services/users'

import Snowballs from './Snowballs'

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
            <p>username: {user.username} </p>
            <p>email: {user.email} </p>
            <p>id: {user.id} </p>
            <Snowballs title='own snowballs:' snowballs={user.own_snowballs}/>
            <Snowballs title='participating in:' snowballs={user.part_snowballs}/>
        </div>
    )
}

export default Profile
