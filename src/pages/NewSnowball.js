import React, {useState, useEffect} from 'react'
import SnowballService from '../services/snowballs'

const NewSnowBall = (props) => {
    const [nameInput, setNameInput] = useState('')

    const createSnowball = async (event) => {
        event.preventDefault()

        const newSnowball = {
            name: nameInput,
            owner: "5f05c8e8a482b61eb86cd04f"
        }

        const res = await SnowballService.create(newSnowball)

        setNameInput('')
    }
    
    const handleNameForm = (event) => {
        setNameInput(event.target.value)
    }

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

export default NewSnowBall
