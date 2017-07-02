const connection = require('../config/connections').mysql

module.exports.post = (event, context, callback) => {
    let queryStr = 'INSERT INTO TABLE_NAME SET ?' 
    let data = {}
    // Your Query
    connection.query(queryStr, data, function (err, rows, fields) {
        if (err) {
            // Error
        } else {
            // Success
        }
    });
};