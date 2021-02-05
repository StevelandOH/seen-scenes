const express = require('express')
const csrf = require('csurf');
const asyncHandler = require('express-async-handler');
const db = require('../db/models')
const { Like } = require('../db/models');

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
  const authenticated = res.locals.authenticated

  if (authenticated) {
    const reels = await db.Reel.findAll({where: {userId: req.session.auth.userId }})
    const thumbsUp = await Like.findOne({where: {userId: req.session.auth.userId, filmId:id}});
    const user = await db.User.findByPk(req.session.auth.userId)
    const userReview = await db.Review.findOne({where: {userId: user.id, filmId: id }})
    res.render('films-id', {
      film,
      reviews,
      reels,
      user,
      userReview,
      thumbsUp,
      authenticated,
      token: req.csrfToken() })
  } else {
    res.render('films-id', {film, reviews})
  }
}));

router.post('/:id/review/new', asyncHandler(async (req, res) => {

  const { review, filmId } = req.body
  const userId = req.session.auth.userId

  // console.log(review, userId, filmId)

  await db.Review.create({
    review,
    userId,
    filmId
  })
  res.json();
}))



router.post('/:id/review/delete', asyncHandler(async (req, res) => {
  const { userId, filmId } = req.body
  console.log(userId, filmId)
  const review = await db.Review.findOne({where: {userId: userId, filmId: filmId }})


  review.destroy()

  res.redirect(`/films/${filmId}`)

}))

router.post('/:id/like', asyncHandler(async (req, res) => {

  const {status, userId, filmId} = req.body;

  await Like.create({
    status,
    userId,
    filmId,
  })

  // await db.FilmReel.create({
  //   userId: 1, filmId, reelId: userId
  // })

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

  // await db.FilmReel.destroy({
  //   where: {userId: 1, filmId, reelId: userId}
  // })

  res.json();

}))

router.post('/:id/reel', asyncHandler(async (req, res) => {
  const { filmId, reelId } = req.body
  const userId = req.session.auth.userId

  const reeledMovie = await db.FilmReel.findAll({
    where: {
      filmId, reelId, userId: req.session.auth.userId }})

  console.log(reeledMovie)

  if (!reeledMovie[0]) {
    await db.FilmReel.create({filmId, reelId, userId})
    res.redirect(`/films/${filmId}`)
  } else {
    throw new Error ('Movie Already in Reel')
  }
}))



module.exports = router;
