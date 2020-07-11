import React from 'react'

import Profile from './Profile'

const FriendsList = (props) => {
    const friends = props.friends

    if (!friends[0]) {
        return (
            <div/>
        )
    } else {
        return (
            <div className='wrapper'>
                {friends.map(friend => {
                    if (friend) {
                        return (<Profile.Mini user={friend} key={friend.username}/>)
                    } else {
                        return (<div/>)
                    }
                })}
            </div>
        )
    }
}

export default FriendsList

