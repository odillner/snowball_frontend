import React, {useState, useEffect} from 'react'

import userService from '../services/users'
export default {
    Profile : (props) => {
        const [user, setUser] =  useState({})

        useEffect(() => {
            setUser(userService
                .read(user.id)
            )
        }, [])

        return (
            <div>
                {user.name}
            </div>
        )
    }
}
