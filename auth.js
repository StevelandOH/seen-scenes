const db = require("./db/models")

const loginUser = (req, res, user) => {
   console.log(req);
   return req.session.auth = { userId: user.id }
}

const restoreUser = async (req, res, next) => {
   console.log(req.session)

   if (req.session.auth) {
      const {userId} = req.session.auth;
      try {
         const user = await db.User.findByPk(userId);
         if (user) {
            res.locals.authenticated = true;
            res.locals.user = user;
            next();
         }
      } catch (error) {
         res.locals.authenticated = false;
         next(e);
      }
   } else {
      res.locals.authenticated = false;
      next();
   }
}
//implement and put login errors into login.pug

module.exports = { loginUser, restoreUser }
