const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const csrf = require("csurf");
const { Genre, User } = require("../db/models");
const csrfProtection = csrf({ cookie: true });
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

router.get(
  "/register",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const genres = await Genre.findAll();
    const users = User.build();
    res.render("register", {
      title: "Register",
      genres,
      token: req.csrfToken(),
      users
    });
  })
);

const userValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username.")
    .isLength({ max: 20 })
    .withMessage("Username cannot be longer than 20 characters"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email")
    .isLength({ max: 100 })
    .withMessage("Email cannot be longer than 100 characters")
    .isEmail()
    .withMessage("Email is not a valid email")
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("Email already exists");
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password")
    .isLength({ max: 50 })
    .withMessage("Password cannot be longer than 50 characters"),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password")
    .isLength({ max: 50 })
    .withMessage("Password cannot be longer than 50 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match");
      }
      return true;
    }),
];


router.post(
   "/register",
   userValidators,
   csrfProtection,
   asyncHandler(async (req, res, next) => {
      const genres = await Genre.findAll();
      const { username, email, password, biography, genreId } = req.body;
      const user = User.build({
         username,
      email,
      biography,
      genreId,
   });
   const validatorErrors = validationResult(req);
   if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      res.redirect("/");
   } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("register", {
         genres,
         title: "Register",
         user,
         errors,
         token: req.csrfToken(),
      });
   }
})
);

router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("login", { title: "Login", token: req.csrfToken() });
  })
);

const loginValidators = [
   check("email")
      .exists({checkFalsy:true})
      .withMessage("Please provide an email"),
   check("password")
      .exists({checkFalsy:true})
      .withMessage("Please provide a password"),
]

router.post(
   '/login',
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
      const {email, password} = req.body;
      let errors = [];
      const validatorErrors = validationResult(req)
      if (validatorErrors.isEmpty()) {
         const user = await User.findOne({where: {email}})
         if (user !== null) {
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
            if (passwordMatch) {
               return res.redirect("/");
            }
         }
         errors.push("Login Failed")
      } else {
         errors = validatorErrors.array().map((error) => error.msg);
      }
      res.render("login", {
         title: "Login",
         email,
         errors,
         token: req.csrfToken(),
      })
  })
);

// router.get('/:id(\\d+)', asyncHandler( async( req, res, next ) => {

// }));

// router.get('/:id(\\d+)/reels', asyncHandler( async( req, res, next ) => {

// }));

// router.post('/:id(\\d+)/reels', asyncHandler( async( req, res, next ) => {

// }));

module.exports = router;
