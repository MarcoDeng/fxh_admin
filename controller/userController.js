/**
 * Created by maweiyi on 9/2/16.
 */
var pool = require('../config/pool').pool;

//对用户进行增删改查

//查找所有的用户
/**
 * req.query.num;
 * @param req
 * @param res
 * @param next
 */
function findAllUser(req, res, next) {
    var num = req.query.num;

    pool.getConnection(function (err, connection) {
        connection.query("SELECT user_id, user_name, name_s, school, major, sex, headimgurl, likes," +
            " authentication FROM user_info WHERE is_del != 1 LIMIT ?, 20", [(num - 1) * 20], function (err, result) {
            var user = {user: result, errcode: "0", errmsg: "ok"};
            connection.release();
            res.send(JSON.stringify(user));
        })
    })
}
/**
 * req.query.id
 * @param req
 * @param res
 * @param next
 */
function deleteUser(req, res, next) {
    var id = req.query.id;

    pool.getConnection(function (err, connection) {
        connection.query("UPDATE user_info SET is_del = 1 WHERE user_id = ?", [id], function (err, result) {
            res.send(JSON.stringify({errcode: "0", errmsg: "ok"}));
        })
    })
}


function usersDetailSchool (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(JSON.stringify({errcode: "1000", errmsg:"error"}));
        } else {

            connection.query('UPDATE user_info SET school = ? WHERE user_id = ?',[req.body.school, req.body.id], function (err, result) {
                if (err) {
                    next(err);
                } else {
                    res.send(JSON.stringify({errcode:"0", errmsg:"ok"}));
                }
            })
        }

    });

}

function usersDetailMajor (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(JSON.stringify({errcode: "1000", errmsg:"error"}));
        } else {
            connection.query('UPDATE user_info SET major = ? WHERE user_id = ?',[req.body.majors, req.user[0]], function (err, result) {
                if (err) {
                    next(err);
                } else {
                    res.send(JSON.stringify({errcode:"0", errmsg:"ok"}));
                }
            })
        }

    });
}

function usersDetailState (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(JSON.stringify({errcode: "1000", errmsg:"error"}));
        } else {
            connection.query('UPDATE user_info SET personal_statement = ? WHERE user_id = ?',[req.body.presonal_statement, req.user[0]], function (err, result) {
                if (err) {
                    next(err);
                } else {
                    res.send(JSON.stringify({errcode:"0", errmsg:"ok"}));
                }
            })
        }

    });
}



module.exports = {
    findAllUser: findAllUser,
    deleteUser: deleteUser,
    usersDetailState: usersDetailState,
    usersDetailMajor: usersDetailMajor,
    usersDetailSchool: usersDetailSchool
};