import axios from 'axios'

import {API_URL} from '../utils/config'
import logger from '../utils/logger'

const extension = 'api/snowballs/'
const baseUrl = API_URL + extension

export default {
    /*gets all snowballs in database*/
    getAll: async () => {
        try {
            logger.info(extension, 'Fetching snowballs')

            const res = await axios.get(baseUrl)

            logger.info(extension, 'Snowballs fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*creates given snowball*/
    create: async (newSnowball) => {
        try {
            logger.info(extension, 'Creating snowball', newSnowball)

            const res = await axios.post(baseUrl, newSnowball)

            logger.info(extension, 'Snowball created', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*gets snowball with given id*/
    getById: async (id) => {
        try {
            logger.info(extension, 'Fetching snowball', id)

            const res = await axios.get(baseUrl + id)

            logger.info(extension, 'Snowball fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    /*deletes single snowball with given id*/
    remove: async (id) => {
        try {
            logger.info(extension, 'Deleting snowball', id)

            const res = await axios.delete(baseUrl + id)

            logger.info(extension, 'Snowball deleted', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },

    /*updates snowball with gives id with given snowball object*/
    update: async (id, newSnowball) => {
        try {
            logger.info(extension, 'Updating snowball', id, newSnowball)

            const res = await axios.put(`${baseUrl}${id}`, newSnowball)

            logger.info(extension, 'Snowball updated', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    }
}