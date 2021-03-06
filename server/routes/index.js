/* Define routes */
const siteRoute = require("./Site.route");
const apisRoute = require("./Api.v1.route");

module.exports = function route(app) {
  // Root: http://example.com
  app.use("/", siteRoute);

  // Root: http://example.com/api/v1
  app.use("/api/v1", apisRoute);
};
