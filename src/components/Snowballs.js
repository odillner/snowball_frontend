import React from 'react'

import Snowball from './Snowball'

const Full = (props) => {
    const snowballs = props.snowballs

    if (!snowballs) {
        return (
            <div/>
        )
    } else {
        if (snowballs[0]) {
            return (
                <div className="wrapper">
                    <h2>{props.title}</h2>
                    {snowballs.map(snowball => {
                        return <Snowball.Full snowball={snowball} key={snowball.id}/>
                    })}
                </div>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}

const Mini = (props) => {
    const snowballs = props.snowballs

    if (!snowballs) {
        return (
            <div/>
        )
    } else {
        if (snowballs[0]) {
            return (
                <div className="wrapper">
                    {snowballs.map(snowball => {
                        return <Snowball.Mini snowball={snowball} key={snowball.id}/>
                    })}
                </div>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}

export default {
    Full,
    Mini
}