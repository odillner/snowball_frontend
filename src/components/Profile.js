import React from 'react'

import Snowballs from './Snowballs'


const Full = (props) => {
    const user = props.user

    if (user) {
        return (
            <div className='profile'>
                <h1>profile</h1>
                <p>username: {user.username} </p>
                <p>email: {user.email} </p>
                <p>id: {user.id} </p>
                <Snowballs.Full title='snowballs:' snowballs={user.ownSnowballs}/>
                <Snowballs.Full title='participating in:' snowballs={user.partSnowballs}/>
                <Snowballs.Full title='history:' snowballs={user.histSnowballs}/>
            </div>
        )
    }

    return (
        <div/>
    )
}


const Mini = (props) => {
    const user = props.user

    if (user) {
        return (
            <div className='profile'>
                <b>profile</b>
                <p>username: {user.username} </p>
                <p>id: {user.id} </p>
            </div>
        )
    }

    return (
        <div/>
    )
}


export default {
    Full,
    Mini
}
