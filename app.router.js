const Express = require("express"),
  Router = Express.Router();
const PageController = require(`${process.cwd()}/controllers/page`);

/**
 * router config
 */
Router.route("/").get(PageController.index);
Router.route("/reviews").get(PageController.reviews);
Router.route("/details/:id").get(PageController.detail);
Router.route("/reviews/:category/:years").get(PageController.filterReviews);
Router.route("/reviews/:category/:years/:page").get(
  PageController.filterReviewsPage
);

module.exports = Router;
