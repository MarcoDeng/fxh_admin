/**
 * Created by maweiyi on 9/1/16.
 */
var mysql = require('mysql');

/**
 * 数据库连接模块儿
 * @type {"mysql".IPool}
 */
var pool = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'fangxuehai1'
});


pool.getConnection(function (err, connection) {
    connection.query("SELECT username, password, role FROM " +
        "admin_user WHERE username = 'admin'", function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result[0]["username"]);
            connection.release();
        }

    })
});

module.exports.pool = pool;