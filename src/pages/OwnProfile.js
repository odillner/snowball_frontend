import React, {useState, useEffect} from 'react'
import Profile from '../components/Profile'
import userService from '../services/users'

/*own profile page, uses current user to display*/
const OwnProfile = (props) => {
    const {user} = props.state

    if (user) {
        return (
            <div>
                <Profile.Full user={user}/>
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
