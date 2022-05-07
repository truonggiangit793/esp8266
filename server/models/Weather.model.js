const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    temperatureC: { type: Number },
    temperatureF: { type: Number },
    humidity: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Weather", weatherSchema);
