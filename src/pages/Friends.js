import React, {useState, useEffect} from 'react'
import userService from '../services/users'
import FriendsList from '../components/FriendsList'

const Friends = (props) => {
    const [nameInput, setNameInput] = useState('')
    const [friends, setFriends] =  useState([])

    const display = props.display;
    const user = props.user

    useEffect(() => {
        if (user) {
            getFriends()
        }
    }, [])

    const addFriend = async (event) => {
        event.preventDefault()

        try {
            const newFriend = await userService.getByName(nameInput)
            const res = await userService.addFriend(user, newFriend)
            display.info('Friend successfully added')
        } catch (err) {
            display.error('Error adding friend')
        }

        getFriends()
        setNameInput('')
    }
    
    const handleNameForm = (event) => {
        setNameInput(event.target.value)
    }

    const getFriends = async () => {
        try {
            const res = await userService.getFriends(user)
            setFriends(res)
        } catch (err) {
            display.error("Error fetching friends")
        }
    } 

    if (!user) {
        return (
            <div>
                log in to add friends
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <form>
                        <div>
                            name: <input value={nameInput} onChange={handleNameForm}/>
                        </div>
                        <div>
                            <button type="submit" onClick={addFriend}>Add Friend</button>
                        </div>
                    </form>

                    <FriendsList friends={friends}/>
                </div>
            </div>
        )
    }
}

export default Friends

