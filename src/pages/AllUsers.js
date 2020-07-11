import React, {useState, useEffect} from 'react'
import userService from '../services/users'
import Profile from '../components/Profile'

const AllUsers = (props) => {
    const [users, setUsers] =  useState([])

    const display = props.display;

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const res = await userService.getAll()
            setUsers(res)
        } catch (err) {
            display.error("Error fetching users")
        }
    } 

    if (users) {
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
