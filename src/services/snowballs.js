import config from '../utils/config'
import axios from 'axios'

const baseUrl = config.API_URL + '/snowballs/'

export default {
    getAll: async () => {
        const res = await axios.get(baseUrl)
        return res.data
    },

    create: async (newObject) => {
        const res = await axios.post(baseUrl, newObject)
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