import axios from 'axios'
import {API_URL} from '../utils/config'

const baseUrl = API_URL + 'api/login/'

export default {
    auth: async (user) => {
        const res = await axios.post(baseUrl, user)
        return res.data
    },
}