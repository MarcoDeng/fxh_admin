/**
 * Created by maweiyi on 9/1/16.
 */
var pool = require('../config/pool').pool;
/**
 * Method: POST
 * req.body.username
 * req.body.password
 * @param res
 * @param req
 * @param next
 */
//
function login(req, res, next) {
    //查询数据中的用户名

    //比较用户名和密码
    pool.getConnection(function (err, connection) {
        connection.query("SELECT username, password, role FROM " +
            "admin_user WHERE username = ?", [req.body.username], function (err, result) {
            if (err) {
                console.log(err);
            } else {

                if (req.body.password == result[0]["password"]) {
                    req.session.user = JSON.stringify(result);
                    res.redirect('/');//进行重定向
                } else {
                    res.redirect('/login');
                }
                connection.release();
            }

        })
    });
}

function loginRequire(req, res, next) {
    if (req.session.user == undefined) {
        res.redirect('/login');
    } else {
        next();
    }
}

function adminRequire(req, res, next) {
    console.log(req.session.user);
    if (req.session.user["role"] > 1) {
        next();
    } else {
        res.redirect('/login');
    }
}

function logout(req, res, next) {
    delete req.session.user;
    res.redirect('/login');
}


module.exports = {

};

module.exports = {
    login: login,
    loginRequire: loginRequire,
    adminRequire: adminRequire,
    logout: logout
};