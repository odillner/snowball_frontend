require('dotenv').config()

let API_URL = process.env.REACT_APP_API_URL

if (process.env.NODE_ENV === 'test') {
    API_URL = process.env.REACT_APP_API_URL
}

module.exports = {
    API_URL
}
