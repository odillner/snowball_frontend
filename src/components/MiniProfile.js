import React from 'react'

import MiniSnowball from './MiniSnowball.js'

const MiniProfile = (props) => {
    const user = props.user

    return (
        <div className='profile'>
            <p>profile</p>
            <p>username: {user.username} </p>
            <p>id: {user.id} </p>
            <MiniSnowball snowballs={user.own_snowballs}/>
        </div>
    )
}

export default MiniProfile
