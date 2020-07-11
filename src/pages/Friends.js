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
            const res = await userService.addFriendByName(user, nameInput)

            setFriends(friends.concat(res))
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

            setFriends(friends.filter(friend => friend.username !== res.username))


            display.info('Friend successfully removed')
        } catch (err) {
            display.error('Error removing friend')
        }

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
}

export default Friends

