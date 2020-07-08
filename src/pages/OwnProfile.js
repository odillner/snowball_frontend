import React, {useState, useEffect} from 'react'
import Profile from '../components/Profile'

const OwnProfile = (props) => {
    const id = props.id

    return (
        <Profile id={id}/>
    )
}

export default OwnProfile
