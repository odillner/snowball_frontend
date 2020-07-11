import React from 'react'

import Snowball from './Snowball'

const Full = (props) => {
    const snowballs = props.snowballs

    if ((snowballs != []) && snowballs) {
        if (snowballs[0]) {
            if (snowballs[0].id) {
                return (
                    <div className="wrapper">
                        <h2>{props.title}</h2>
                        {snowballs.map(snowball => {
                            return <Snowball.Full snowball={snowball} key={snowball.id}/>
                        })}
                    </div>
                )
            }
        }
    }

    return (
        <div/>
    ) 
}

const Mini = (props) => {
    const snowballs = props.snowballs

    if ((snowballs != []) && snowballs) {
        if (snowballs[0]) {
            if (snowballs[0].id) {
                return (
                    <div className="wrapper">
                        <h2>{props.title}</h2>
                        {snowballs.map(snowball => {
                            return <Snowball.Mini snowball={snowball} key={snowball.id}/>
                        })}
                    </div>
                )
            }
        }
    }

    return (
        <div/>
    ) 
}

export default {
    Full,
    Mini
}