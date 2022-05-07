const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

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

weatherSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Weather", weatherSchema);
