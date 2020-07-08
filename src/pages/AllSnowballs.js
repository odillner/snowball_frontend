import React, {useState, useEffect} from 'react'
import snowballService from '../services/snowballs'
import Snowball from '../components/Snowball'

const AllSnowballs = (props) => {
    const [snowballs, setSnowballs] =  useState([])

    useEffect(() => {
        getSnowballs()
    }, [])

    const getSnowballs = async () => {
        const res = await snowballService.getAll()

        setSnowballs(res)
    }

    return (
        <div>
            {snowballs.map(snowball => {
                return (
                    <Snowball snowball={snowball} key={snowball.name}/>
                )
            })}
        </div>
    )
}

export default AllSnowballs
