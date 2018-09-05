const Express = require("express"),
  I18n = require("i18n"),
  CookieParser = require("cookie-parser"),
  Router = require("./app.router");
//ErrorHandler = require("./helpers/error-handler")
const app = Express();
const HBSEngine = require("express-hbs");
const HBSHelpers = require("./helpers/hbs-helpers");

app.engine(
  "hbs",
  HBSEngine.express4({
    partialsDir: `${__dirname}/views/partials`,
    defaultLayout: `${__dirname}/views/layouts/default.hbs`
  })
);

app.set("view engine", "hbs");

HBSHelpers.registerHelpers(HBSEngine);

/**
 * Config. i18n module
 */
I18n.configure({
  locales: ["en", "fr"],
  cookie: "movies-app-locales",
  directory: __dirname + "/locales"
});

/**
 * MiddlewareConfig
 * - Expose cookies on req.cookies
 * - Init i18n
 * - Directory public
 * - Define Router
 */

app.use(CookieParser());
app.use(I18n.init);
app.use(Express.static("public"));
app.use("/", Router);

module.exports = app;
