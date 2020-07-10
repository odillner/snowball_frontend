import React from 'react'

import Profile from './Profile'

const FriendsList = (props) => {
    const friends = props.friends

    if (!friends) {
        return (
            <div/>
        )
    } else {
        return (
            <div className='profile'>
                {friends.map(friend => {
                    return (<Profile user={friend} key={friend.username}/>)
                })}
            </div>
        )
    }
}

export default FriendsList

