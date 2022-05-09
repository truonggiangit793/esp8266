/* Routes for apiRoute */
const apiRoute = require("express").Router();
const weatherModel = require("../models/Weather.model");

// Root: http://example.com/api/v1
apiRoute.get("/", (req, res, next) => {
  res.json({ status: true, message: "Welcome to API" });
});

apiRoute.get("/new-data", (req, res, next) => {
  const temperatureC = req.query.temperatureC || null;
  const humidity = req.query.humidity || null;

  if (!temperatureC || !humidity) return res.json({ status: false, message: "No data to insert" });

  new weatherModel({
    temperatureC: temperatureC,
    temperatureF: (9 / 5) * temperatureC + 32,
    humidity: humidity,
  })
    .save()
    .then((inserted) => {
      console.log(inserted);
      if (inserted) return res.json({ status: true, message: "Success" });
      return res.json({ status: false, message: "Failed" });
    })
    .catch((err) => {
      return res.json({ status: false, message: "Failed" });
    });
});

apiRoute.get("/get-data", (req, res, next) => {
  weatherModel
    .find({})
    .then((data) => {
      return res.json({ status: true, message: "Success", data });
    })
    .catch((err) => {
      return res.json({ status: false, message: "Failed" });
    });
});

module.exports = apiRoute;
