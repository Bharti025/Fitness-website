const mongoose = require("mongoose");

const dietScheduleSchema = new mongoose.Schema({
  mealType: { type: String, required: true },
  defaultTime: { type: String, required: true }, // Stored as "HH:mm"
  description: { type: String, required: true },
});

module.exports = mongoose.model("DietSchedule", dietScheduleSchema);
