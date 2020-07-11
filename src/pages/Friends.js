import React, {useState, useEffect} from 'react'
import userService from '../services/users'
import FriendsList from '../components/FriendsList'

const Friends = (props) => {
    const {user, users, display} = props.state

    const [nameInput, setNameInput] = useState('')
    const [friends, setFriends] = useState(null)
    
    useEffect(() => {
        if (user && !friends) {
            setFriends(user.friends)
        }
    }, [])

    const addFriend = async (event) => {
        event.preventDefault()

        try {
            const res = await userService.addFriendByName(user, nameInput)
            const newFriends = friends.concat(res)

            setFriends(newFriends)
            display.info('Friend successfully added')
        } catch (err) {
            display.error('Error adding friend')
        }

        setNameInput('')
    }

    const removeFriend = async (event) => {
        event.preventDefault()

        try {
            const res = await userService.removeFriendByName(user, nameInput)
            const newFriends = friends.filter(friend => friend.username !== res.username)

            setFriends(newFriends)
            display.info('Friend successfully removed')
        } catch (err) {
            display.error('Error removing friend')
        }

        setNameInput('')
    }
    
    const handleNameForm = (event) => {
        setNameInput(event.target.value)
    }

    if (friends) {
        return (
            <div>
                <div>
                    <form>
                        <div>
                            name: <input value={nameInput} onChange={handleNameForm}/>
                            <button type="submit" onClick={addFriend}>Add Friend</button>
                            <button type="submit" onClick={removeFriend}>Remove Friend</button>
                        </div>
                        <div>
                        </div>
                    </form>

                    <FriendsList friends={friends}/>
                </div>
            </div>
        )
    }    

    return (
        <div>
            log in to add friends
        </div>
    )
}

export default Friends

