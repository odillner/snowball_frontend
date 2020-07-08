import config from '../utils/config'
import axios from 'axios'
import logger from '../utils/logger'

const baseUrl =  'http://localhost:3005/api/snowballs/'

export default {
    getAll: async () => {
        const res = await axios.get(baseUrl)
        return res.data
    },

    create: async (newObject) => {
        const res = await axios.post(baseUrl, newObject)
        return res.data
    },

    read: async (id) => {
        const res = await axios.get(baseUrl + id)
        return res.data
    },
    
    remove: async (id) => {
        const res = await axios.delete(baseUrl + id)
        return res.data
    },

    update: async (id, newObject) => {
        const res = await axios.put(`${baseUrl}${id}`, newObject)
        return res.data
    }
}