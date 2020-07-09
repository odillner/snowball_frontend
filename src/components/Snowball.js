import React, {useState, useEffect} from 'react'
import snowballService from '../services/snowballs'

const Snowball = (props) => {
    const [snowball, setSnowball] =  useState({})

    useEffect(() => {
        if (props.id) {
            setCurrentSnowball(props.id)
        } else if (props.snowball) {
            setSnowball(props.snowball)
        }
    }, [])

    const setCurrentSnowball = async (id) => {
        const res = await snowballService.read(id)

        setSnowball(res)
    }

    return (
        <div className='snowball'>
            <p>name: {snowball.name} </p>
            <p>owner id: {snowball.owner} </p>
            <p>snowball id: {snowball.id} </p>
        </div>
    )
}

export default Snowball
