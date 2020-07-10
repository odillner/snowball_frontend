import React from 'react'

const MiniSnowball = (props) => {
    const snowball = props.snowball

    if (snowball) {
        return (
            <div className='snowball'>
                <p>name: {snowball.name} </p>
                <p>snowball id: <br/>{snowball.id} </p>
            </div>
        )
    } else {
        return (
            <div/>
        )
    }
}

export default MiniSnowball
