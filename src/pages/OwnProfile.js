import React, {useState, useEffect}from 'react'
import Profile from '../components/Profile'
import userService from '../services/users'

/*own profile page, uses current user to display*/
const OwnProfile = (props) => {
    const [populatedUser, setPopulated] =  useState(null)

    const display = props.display
    const user = props.user

    useEffect(() => {
        if (user) {
            getSnowballs(user)
        }
    }, [])

    const getSnowballs = async (user) => {
        try {
            const res = await userService.populateSnowballData(user)
            setPopulated(res)
        } catch (err) {
            display.error("Error fetching snowballs")
        }
    }

    if (populatedUser) {
        return (
            <div>
                <Profile.Full user={populatedUser}/>
            </div>
        )
    }

    return (
        <div>
            log in to view profile
        </div>
    )
}

export default OwnProfile
