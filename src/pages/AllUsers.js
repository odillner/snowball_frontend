import React, {useState, useEffect} from 'react'
import userService from '../services/users'
import Profile from '../components/Profile'

const AllUsers = (props) => {
    const [users, setUsers] =  useState([])

    useEffect(() => {
        setCurrentUsers()
    }, [])

    const setCurrentUsers = async () => {
        const res = await userService.getAll()

        setUsers(res)
    }

    return (
        <div>
            {users.map(user => {
                return (
                    <Profile user={user} key={user.username}/>
                )
            })}
        </div>
    )
}

export default AllUsers
