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
