require('dotenv').config();

const host = process.env.MySQL_DB_HOST;
const username = process.env.MySQL_DB_USER;
const password = process.env.MySQL_DB_PASSWORD

module.exports = {
    dialect: 'mysql',
    database:'multiplier',
    host,
    username,
    password,
    define: {
        timestamps: true,
    },
};

