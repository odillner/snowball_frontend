import React from 'react'

import Snowballs from './Snowballs'


const Full = (props) => {
    const user = props.user

    return (
        <div className='profile'>
            <h1>profile</h1>
            <p>username: {user.username} </p>
            <p>email: {user.email} </p>
            <p>id: {user.id} </p>
            <Snowballs.Full title='snowballs:' snowballs={user.own_snowballs}/>
            <Snowballs.Full title='participating in:' snowballs={user.part_snowballs}/>
        </div>
    )
}

const Mini = (props) => {
    const user = props.user

    return (
        <div className='profile'>
            <b>profile</b>
            <p>username: {user.username} </p>
            <p>id: {user.id} </p>
            <Snowballs.Mini title='snowballs:' snowballs={user.own_snowballs}/>
        </div>
    )
}


export default {
    Full,
    Mini
}
