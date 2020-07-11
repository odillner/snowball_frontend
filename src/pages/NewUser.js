import React, {useState} from 'react'
import userService from '../services/users'
import logInService from '../services/login'

/*sign up page, creates new users*/
const NewUser = (props) => {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const display = props.display
    const user = props.user

    const signUpUser = async (event) => {
        event.preventDefault()

        const newUser = {
            username: nameInput,
            email: emailInput,
            password: passwordInput
        }

        try {
            await userService.create(newUser)
            display.info('Successfully created user')
            logInUser()
        } catch (err) {
            display.error('Failed to create user')
        }

        setNameInput('')
        setEmailInput('')
        setPasswordInput('')
    }

    
    const logInUser = async () => {
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
    
    const handleEmailForm = (event) => {
        setEmailInput(event.target.value)
    }
    
    const handlePasswordForm = (event) => {
        setPasswordInput(event.target.value)
    }
    
    if (!user) {
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

    return (
        <div>
            already logged in
        </div>
    )
}

export default NewUser
