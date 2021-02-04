const express = require('express')
const csrf = require('csurf');
const asyncHandler = require('express-async-handler');
const db = require('../db/models')
const { Review } = require('../db/models')

const router = express.Router()
const csrfProtection = csrf({ cookie: true });

router.get('/', asyncHandler(async (req, res) => {

  const films = await db.Film.findAll()

  res.render('films', { films })
}))

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id
  const film = await db.Film.findByPk(id, { include: db.Genre })
  const reviews = await db.Review.findAll( {include: db.User, order: [['updatedAt', 'DESC']], where: {filmId: id}},)

  res.render('films-id', { film, reviews, token: req.csrfToken() })
}));

router.post('/:id/review/new', asyncHandler(async (req, res) => {

  const { review, userId, filmId } = req.body

  console.log(review, userId, filmId)

  const reviewed = await Review.create({
    review,
    userId,
    filmId
  })
  res.json()
}))








module.exports = router;
