import React from 'react'

const Snowball = (props) => {
    const snowball = props.snowball

    if (snowball) {
        return (
            <div className='snowball'>
                <p>name: {snowball.name} </p>
                <p>owner id: {snowball.owner} </p>
                <p>snowball id: {snowball.id} </p>
            </div>
        )
    } else {
        return (
            <div/>
        )
    }
}

export default Snowball
