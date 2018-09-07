const Movie = require(`${process.cwd()}/models/movie`);

exports.index = async (req, res) => {
  let movies = await Movie.find(
    {},
    { "fields.title": 1, "fields.rank": 1, "fields.image_url": 1, id: 1 }
  )
    .sort({ "fields.rank": 1 })
    .limit(10);
  let top3_movie = movies.slice(0, 3);
  let top4_5_movie = movies.slice(3, 6);
  let top6_9_movie = movies.slice(6);

  res.render("pages/index", {
    movies: top3_movie,
    movie2: top4_5_movie,
    movie3: top6_9_movie
  });
};
exports.detail = async (req, res) => {
  let id = req.params.id;
  let movie = await Movie.findOne({ id: { $in: [req.params.id] } }, {});
  res.render("pages/details", {
    movie: movie
  });
};

exports.reviews = async (req, res) => {
  let movie = await Movie.find({}, {})
    .sort({ "fields.rank": 1 })
    .limit(8);

  let movies = await Movie.find().sort({
    "fields.title": 1
  });
  let genres = [];
  let years = [];

  let i = 1998,
    current = parseInt(new Date().getUTCFullYear());

  await movies.forEach(async movie => {
    await movie.fields.genres.forEach(async genre => {
      if (genres.lastIndexOf(genre) === -1) {
        await genres.push(genre.trim());
      }
    });
  });
  for (i; i <= current; i++) {
    years.push(i);
  }

  res.render("pages/movies", {
    movies: movie,
    genres: genres.sort(),
    years: years
  });
};

exports.filterReviews = async (req, res) => {
  let years = req.params.years;
  let category = req.params.category;
  let movies = await Movie.find({
    $and: [
      { "fields.genres": { $in: [category] } },
      { "fields.year": { $in: [years] } }
    ]
  }).limit(12);
  res.render("pages/filter", {
    movies: movies,
    layout: null
  });
};
exports.filterReviewsPage = async (req, res) => {
  let years = req.params.years;
  let category = req.params.category;
  let page = req.params.page;
  page = page - 1;
  let movies = await Movie.find(
    {
      $and: [
        { "fields.genres": { $in: [category] } },
        { "fields.year": { $in: [years] } }
      ]
    },
    {}
  )
    .skip(12 * page)
    .limit(12);
  res.render("pages/filter", {
    movies: movies,
    layout: null
  });
};
