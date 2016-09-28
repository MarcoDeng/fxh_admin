/**
 * Created by maweiyi on 9/1/16.
 */
var bcrypt = require('bcrypt');

const saltRounds = 10;
/*const password = "admin";
var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(password, salt);
console.log(hash);


console.log(bcrypt.compareSync('admin', hash));*/

const password = "fangxuehainn";
var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(password, salt);

console.log(hash);