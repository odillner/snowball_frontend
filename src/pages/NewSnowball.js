import React, {useState} from 'react'
import snowballService from '../services/snowballs'

const NewSnowBall = (props) => {
    const [nameInput, setNameInput] = useState('')

    const user = props.user
    const display = props.display

    const createSnowball = async (event) => {
        event.preventDefault()

        const newSnowball = {
            name: nameInput,
            owner: user.id
        }
        try {
            await snowballService.create(newSnowball)
            display.info('Snowball successfully created')
        } catch (err) {
            display.error('Error creating snowball')
        }
        setNameInput('')
    }
    
    const handleNameForm = (event) => {
        setNameInput(event.target.value)
    }

    if (user) {
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
    }

    return (
        <div>
            log in to create snowball
        </div>
    )
}

export default NewSnowBall
