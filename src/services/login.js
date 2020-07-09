import axios from 'axios'

const baseUrl = 'http://localhost:3005/api/login/'

export default {
    auth: async (user) => {
        const res = await axios.post(baseUrl, user)
        return res.data
    },
}