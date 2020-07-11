import React, {useState, useEffect} from 'react'
import snowballService from '../services/snowballs'
import Snowball from '../components/Snowball'

const AllSnowballs = (props) => {
    const [snowballs, setSnowballs] =  useState([])

    const display = props.display

    useEffect(() => {
        getSnowballs()
    }, [])

    const getSnowballs = async () => {
        try {
            const res = await snowballService.getAll()
            setSnowballs(res)
        } catch (err) {
            display.error("Error fetching snowballs")
        }
    }

    if (snowballs) {
        return (
            <div>
                {snowballs.map(snowball => {
                    return (
                        <Snowball.Full snowball={snowball} key={snowball.name}/>
                    )
                })}
            </div>
        )
    }

    return (
        <div/>
    )
}

export default AllSnowballs
