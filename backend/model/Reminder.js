const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mealType: { type: String, required: true },
  mealTime: { type: Date, required: true }, // Meal time
  reminderTime: { type: Date, required: true }, // 5 minutes before meal time
  isNotified: { type: Boolean, default: false },
});

module.exports = mongoose.model("Reminder", reminderSchema);
