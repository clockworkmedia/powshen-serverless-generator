'use strict';

var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'LOCALHOST',
    user : 'USERNAME',
    password : 'SECRET',
    database : 'DATABASE'
});

module.exports.post_to_mysql = (event, context, callback) => {

    let queryStr = 'INSERT INTO TABLE_NAME SET ?' // YOUR QUERY STRING
    let data = {} // YOUR DATA

    let query = connection.query(queryStr, data, function (err, rows, fields) {
        if (err) {
           context.done('Error', + err);
        } else {
           context.done();
        }
    });
    
    console.log(null, 'Done');

};