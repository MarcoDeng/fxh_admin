/**
 * Created by maweiyi on 8/15/16.
 */
var redis = require('redis');
var client = redis.createClient({
    port: 6379,
    host: '127.0.0.1',
    db: 13
});

client.on("error", function (err) {
    console.log("XXXXXX");
});

client.on("connect", function (mm) {
    console.log("我连接上了");
});





module.exports.client = client;
