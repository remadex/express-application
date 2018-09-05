const Mongoose = require("mongoose");
let Schema = Mongoose.Schema;

let schema = new Schema({
  fields: {
    directors: [String],
    release_date: String,
    rating: Number,
    genres: [String],
    image_url: String,
    plot: String,
    title: String,
    rank: Number,
    RUnning_time_secs: Number,
    actors: [String],
    year: Number
  },
  id: String,
  type: String
});
module.exports = Mongoose.model("Movie", schema);
