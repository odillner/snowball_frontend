import React from 'react'

const Full = (props) => {
    const snowball = props.snowball

    if (snowball) {
        return (
            <div className='snowball'>
                <b>snowball </b>
                <p>name: {snowball.name} </p>
                <p>owner id: {snowball.owner} </p>
                <p>snowball id: {snowball.id} </p>
            </div>
        )
    } 

    return (
        <div/>
    )
}


const Mini = (props) => {
    const snowball = props.snowball

    if (snowball) {
        return (
            <div className='snowball'>
                <b>snowball </b>
                <p>name: {snowball.name} </p>
                <p>snowball id: <br/>{snowball.id} </p>
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
