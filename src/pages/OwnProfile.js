import React from 'react'
import Profile from '../components/Profile'

/*own profile page, uses current user to display*/
const OwnProfile = (props) => {
    const user = props.user

    if (user) {
        return (
            <div>
                <Profile.Full user={user}/>
            </div>
        )
    } else {
        return (
            <div>
                log in to view profile
            </div>
        )
    }
}

export default OwnProfile
