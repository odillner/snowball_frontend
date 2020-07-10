import React from 'react'

import MiniProfile from './MiniProfile'

const FriendsList = (props) => {
    const friends = props.friends

    if (!friends[0]) {
        return (
            <div/>
        )
    } else {
        return (
            <div className='profile'>
                {friends.map(friend => {
                    return (<MiniProfile user={friend} key={friend.username}/>)
                })}
            </div>
        )
    }
}

export default FriendsList

