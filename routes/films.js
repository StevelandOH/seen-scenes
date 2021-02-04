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
}));

router.post('/:id/review/new', asyncHandler(async (req, res) => {

  const { review, userId, filmId } = req.body

  console.log(review, userId, filmId)

  const reviewed = await Review.create({
    review,
    userId,
    filmId
  })
  res.json();
}))

router.post('/:id/like', asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId;
  const id = req.params.id;
  console.log(req.body)
  console.log(userId, id);
  const newLike = await Like.create({
    status: true, userId, filmId: id
  })

  res.json(); //should it just be res.json

}))

router.delete('/:id/like', asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId;
  const id = req.params.id;

  await Like.destroy({
    where: {
      userId: userId,
      filmId: id
    }
  })

  const body = { status: false };

  res.json();

}))


module.exports = router;
