import axios from 'axios'

import {API_URL} from '../utils/config'
import logger from '../utils/logger'

const extension = 'api/users/'
const baseUrl = API_URL + extension

export default {
    /*gets all users*/
    getAll: async () => {
        try {
            logger.info(extension, 'Fetching users')

            const res = await axios.get(baseUrl)

            logger.info(extension, 'Users fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*creates given user object*/
    create: async (newUser) => {    
        try {
            logger.info(extension, 'Creating user', newUser)

            const res = await axios.post(baseUrl, newUser)

            logger.info(extension, 'User created', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*gets user by given id*/
    getById: async (id) => {
        try {
            logger.info(extension, 'Fetching user', id)

            const res = await axios.get(baseUrl + id)

            logger.info(extension, 'User fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*gets user by given name*/
    getByName: async (name) => {
        try {
            logger.info(extension, 'Fetching user', name)

            const res = await axios.get(baseUrl + 'name/' + name)

            logger.info(extension, 'User fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*removes user by given name*/
    remove: async (id) => {
        try {
            logger.info(extension, 'Deleting user', id)

            const res = await axios.delete(baseUrl + id)

            logger.info(extension, 'User deleted', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*updates user by given id with gives user object*/
    update: async (id, newUser) => {
        try {
            logger.info(extension, 'Updating user', id, newUser)

            const res = await axios.put(`${baseUrl}${id}`, newUser)

            logger.info(extension, 'User updated', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },

    /* populates friends field with user objects */
    getFriends: async (user) => {
        try {
            logger.info(extension, 'Fetching user friends', user.id)

            const res = await axios.get(baseUrl + 'friends/' + user.id)

            logger.info(extension, 'Friends fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },

    /* adds given friend object to given user objects friend field */
    addFriend: async (user, friend) => {
        try {
            logger.info(extension, 'Adding friend,', friend, 'to user', user)

            const res = await axios.post(baseUrl + 'friends/' + user.id, friend)

            logger.info(extension, 'Friend added to user', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },

    /* adds given friend to given user objects friend field */
    addFriendByName: async (user, friend) => {
        try {
            logger.info(extension, 'Finding friend,', friend)
            const newFriend = await axios.get(baseUrl + 'name/' + friend)

            if (!newFriend) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            logger.info(extension, 'Adding friend,', newFriend.data, 'to user', user)
            const res = await axios.post(baseUrl + 'friends/' + user.id, newFriend.data)

            logger.info(extension, 'Friend added to user', res)
            return newFriend.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },

    /* adds given friend to given user objects friend field */
    removeFriendByName: async (user, friend) => {
        try {
            logger.info(extension, 'Finding friend,', friend)
            const oldFriend = await axios.get(baseUrl + 'name/' + friend)

            logger.info(extension, 'Removing friend,', oldFriend, 'from user', user)
            const res = await axios.delete(baseUrl + 'friends/' + user.id, oldFriend)

            logger.info(extension, 'Friend removed from user', res)
            return oldFriend.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    }
}