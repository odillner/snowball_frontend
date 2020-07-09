import React, {useState, useEffect} from 'react'
import SnowballService from '../services/snowballs'

const NewSnowBall = (props) => {
    const [nameInput, setNameInput] = useState('')

    const createSnowball = async (event) => {
        event.preventDefault()

        const newSnowball = {
            name: nameInput,
            owner: props.user.id
        }

        await SnowballService.create(newSnowball)

        setNameInput('')
    }
    
    const handleNameForm = (event) => {
        setNameInput(event.target.value)
    }

    if (props.user) {
        return (
            <div>
                <form>
                    <div>
                        name: <input value={nameInput} onChange={handleNameForm}/>
                    </div>
                    <div>
                        <button type="submit" onClick={createSnowball}>Create Snowball</button>
                    </div>
                </form>
        </div>
        )
    } else {
        return (
            <div>
                log in to create snowball
            </div>
        )
    }
}

export default NewSnowBall
