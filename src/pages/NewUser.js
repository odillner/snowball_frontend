import React, {useState, useEffect} from 'react'
import userService from '../services/users'

const NewUser = (props) => {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const signUpUser = async (event) => {
        event.preventDefault()

        const newUser = {
            username: nameInput,
            email: emailInput,
            password: passwordInput
        }

        const res = await userService.create(newUser)

        setNameInput('')
        setEmailInput('')
        setPasswordInput('')
    }
    
    const handleNameForm = (event) => {
        setNameInput(event.target.value)
    }
    
    const handleEmailForm = (event) => {
        setEmailInput(event.target.value)
    }
    
    const handlePasswordForm = (event) => {
        setPasswordInput(event.target.value)
    }

    return (
        <div>
        <form>
          <div>
            name: <input value={nameInput} onChange={handleNameForm}/>
          </div>
          <div>
            email: <input value={emailInput} onChange={handleEmailForm}/>
          </div>
          <div>
            password: <input value={passwordInput} onChange={handlePasswordForm}/>
          </div>
          <div>
            <button type="submit" onClick={signUpUser}>Sign Up</button>
          </div>
        </form>
      </div>
    )
}

export default NewUser
