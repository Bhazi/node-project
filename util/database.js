const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'limitiedidu@4.7'
})

module.exports = pool.promise();
