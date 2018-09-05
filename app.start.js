const App = require(`${process.cwd()}/app`);
const Dotenv = require("dotenv");
const Mongoose = require("mongoose");

Mongoose.Promise = global.Promise;

Dotenv.config({ path: "./variables.env" });

Mongoose.connect(
  process.env.DB_HOST,
  error => {
    console.log("Mongo is now connected ");
  }
);
/**
 * Listen port config.
 */
App.listen(process.env.PORT, () => {
  console.log("Server is running on port 8001");
});
