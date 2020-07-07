require('dotenv').config()

let PORT = process.env.PORT
let API_URL = process.env.DB_URL

if (process.env.NODE_ENV === 'test') {
    API_URL = process.env.TEST_DB_URL
}

module.exports = {
    API_URL,
    PORT
}
