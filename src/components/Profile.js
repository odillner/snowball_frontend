import React from 'react'

import Snowballs from './Snowballs'

const Profile = (props) => {
    const user = props.user

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
