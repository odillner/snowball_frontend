import React, {useState, useEffect} from 'react'
import logInService from '../services/login'

const LogIn = (props) => {
    const [notication, setNotification] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const logInUser = async (event) => {
        event.preventDefault()

        const user = {
            username: nameInput,
            password: passwordInput
        }

        try {
            const res = await logInService.auth(user)

            props.setSession(res)
            setNotification('Logged in successfully')
        } catch (err) {
            setNotification('Failed to log in')
        }
        setNameInput('')
        setPasswordInput('')
    }
    
    const handleNameForm = (event) => {
        setNameInput(event.target.value)
    }
    
    const handlePasswordForm = (event) => {
        setPasswordInput(event.target.value)
    }

    return (
        <div>
            <h1>{notication}</h1>
        <form>
          <div>
            name: <input value={nameInput} onChange={handleNameForm}/>
          </div>
          <div>
            password: <input value={passwordInput} onChange={handlePasswordForm}/>
          </div>
          <div>
            <button type="submit" onClick={logInUser}>Log In</button>
          </div>
        </form>
      </div>
    )
}

export default LogIn
