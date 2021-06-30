const express = require('express')
const Sequelize = require('sequelize');
const csrf = require('csurf');
const asyncHandler = require('express-async-handler');
const db = require('../db/models')
const { Like } = require('../db/models');
const { movieAPI } = require('../config');
const fetch = require("node-fetch");

const router = express.Router()
const csrfProtection = csrf({ cookie: true });

router.get('/', asyncHandler(async (req, res) => {

  const films = await db.Film.findAll()
  console.log("FILMS :::::::::::::::::::::::::::::::::::::::", films)
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
    // throw new Error ('Movie Already in Reel')
  }
}))

router.post("/search", asyncHandler(async (req, res) => {
  console.log(movieAPI)
  const errors = ["We couldn't find any movies that match your search"];
  const search = `%${req.body.query}%`;
  if (req.body.query) {
    const films = await db.Film.findAll({
      where: {
        title: {
          [Sequelize.Op.iLike]: search
        }
      }
    });

    if (!films.length) {

      const encodedSearchTerm = encodeURIComponent(req.body.query);

      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieAPI}&language=en-US&query=${encodedSearchTerm}&page=1&include_adult=false`);

        if (!response.ok) {
          throw res;
        }

        const responseJSON = await response.json();
        console.log(response)

        const newMoviesArray = responseJSON.results.map(movie => {
          return {
            id: movie.id,
            title: movie.original_title,
            description: movie.overview,
            releaseDate: movie.release_date,
            posterPath: movie.poster_path,
            genreId: movie.genre_ids[0],
            releaseYear: movie.release_date.split('-')[0],
          }
        });

        newMoviesArray.splice(10);

        return res.render('films', { newMoviesArray });

      } catch (err) {
        console.error(err);
        return res.render('films', { films, errors  });
      }
    }

    res.render('films', { films});
  } else {
    res.redirect("/");
  }
}));

router.post('/newFilm', asyncHandler(async (req, res) => {

  const { id, title, description, releaseDate, posterPath, genreId } = req.body;

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${movieAPI}&language=en-US`)

  const credits = await response.json()

  const crew = credits.crew.filter(crew => {
    return crew.job === 'Director'
  })

 const director = crew[0].name

  const newFilm = db.Film.build({
    title,
    description,
    releaseDate,
    posterPath,
    genreId,
    director
  });

  await newFilm.save();

  res.redirect(`/films/${newFilm.id}`);
}));



module.exports = router;
