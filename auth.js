const loginUser = function(req, res, user) {
   return req.session.auth = {userId: user.id}
}
//implement and put login errors into login.pug

module.exports = { loginUser }
