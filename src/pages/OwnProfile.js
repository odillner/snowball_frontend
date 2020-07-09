import React, {useState, useEffect} from 'react'
import Profile from '../components/Profile'

const OwnProfile = (props) => {
    if (props.user) {
        return (
            <div>
                <Profile user={props.user}/>
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
