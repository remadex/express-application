const App = require(`${process.cwd()}/app`);

/**
 * Listen port config.
 */
App.listen(8001, () => {
  console.log("Server is running on port 8001");
});
