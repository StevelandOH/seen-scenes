const express = require('express')
const csrf = require('csurf');
const asyncHandler = require('express-async-handler');
const db = require('../db/models')
const { Review, Like } = require('../db/models');

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
  const thumbsUp = await Like.findOne({where: {userId: req.session.auth.userId, filmId:id}});
  res.render('films-id', { film, reviews, thumbsUp, token: req.csrfToken() })
  const authenticated = res.locals.authenticated

  if (authenticated) {
    const user = await db.User.findByPk(req.session.auth.userId)
    const userReview = await db.Review.findOne({where: {userId: user.id, filmId: id }})
    res.render('films-id', { film, reviews, user, userReview, authenticated, token: req.csrfToken() })
  } else {
    res.render('films-id', {film, reviews})
  }
}));

router.post('/:id/review/new', asyncHandler(async (req, res) => {

  const { review, filmId } = req.body
  const userId = req.session.auth.userId

  // console.log(review, userId, filmId)

  const reviewed = await db.Review.create({
    review,
    userId,
    filmId
  })
  res.json();
}))



router.put('/:id/review/edit', asyncHandler(async (req, res) => {
  const { review, userId, filmId } = req.body
  const reviewed = await db.Review.findOne({where: {userId: userId, filmId: filmId }})

  reviewed.review = review

  reviewed.save()

  res.json()

}))

router.post('/:id/like', asyncHandler(async (req, res) => {

  const {status, userId, filmId} = req.body;

  await Like.create({
    status,
    userId,
    filmId,
  })

  res.json();

}))

router.delete('/:id/like', asyncHandler(async (req, res) => {

  const { userId, filmId } = req.body;

  await Like.destroy({
    where: {
      userId,
      filmId,
    }
  })

  res.json();

}))


module.exports = router;
