/* Routes for sitesRoute */
const sitesRoute = require("express").Router();

// Root: http://example.com
sitesRoute.get("/", (req, res, next) => {
  res.json({ status: true, message: "Success" });
});

module.exports = sitesRoute;
