import React, {useState} from 'react'
import logInService from '../services/login'

const LogIn = (props) => {
    const [nameInput, setNameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const display = props.display
    const user=props.user

    const logInUser = async (event) => {
        event.preventDefault()

        const user = {
            username: nameInput,
            password: passwordInput
        }

        try {
            const res = await logInService.auth(user)

            props.setSession(res)
            display.info("Successfully logged in")
        } catch (err) {
            display.error("Failed to log in, password or username incorrect")
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

    if (user) {
        return (
            <div>
                already logged in
            </div>
        )
    } else {
        return (
            <div>
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
}

export default LogIn
