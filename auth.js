const loginUser = function(req, res, user) {
   return req.session.auth = {userId: user.id}
}

module.exports = {loginUser}
