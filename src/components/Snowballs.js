import React from 'react'

import Snowball from './Snowball'

const Snowballs = (props) => {
    const snowballs = props.snowballs

    if (!snowballs) {
        return (
            <div/>
        )
    } else {
        if (snowballs[0]) {
            return (
                <div className="profile">
                    <h2>{props.title}</h2>
                    {snowballs.map(snowball => {
                        if (snowball.id) {
                            return <Snowball snowball={snowball} key={snowball.id}></Snowball>
                        } else {
                            return <Snowball id={snowball} key={snowball}></Snowball>
                        }
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

export default Snowballs