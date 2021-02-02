const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const csrf = require('csurf');
const {Genre} = require('../db/models')
const csrfProtection = csrf({cookie:true});

router.get('/register', csrfProtection, asyncHandler(async(req, res) => {
   const genres = await Genre.findAll();
   res.render('register', {title:'Register', genres, token:req.csrfToken()})
}));

router.get('/login', csrfProtection, asyncHandler(async(req, res) => {
   res.render('login', {title:'Login', token:req.csrfToken()})
}));

module.exports = router;
