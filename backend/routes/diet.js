// const Reminder = require("../model/Reminder");
// const DietSchedule = require("../model/dietSchedule");
// const cron = require("node-cron");
// const router=require('express').Router();

// router.get("/diet-schedule", async (req, res) => {
//     try {
//       const schedule = await DietSchedule.find();
//       res.status(200).json(schedule);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch diet schedule" });
//     }
//   });
  
  // Set reminders 5 minutes before meal times
//   router.post("/set-reminders", async (req, res) => {
//     const { userId, reminders } = req.body; // { Breakfast: "08:00", Lunch: "13:00", ... }  
//     try {
//       const reminderEntries = Object.entries(reminders).map(([mealType, time]) => {
//         const mealTime = new Date(`1970-01-01T${time}:00Z`); // Convert time to Date
//         const reminderTime = new Date(mealTime.getTime() - 5 * 60 * 1000); // 5 minutes before
//         return {
//           userId,
//           mealType,
//           mealTime,
//           reminderTime,
//           isNotified: false,
//         };
//       });
  
//       await Reminder.insertMany(reminderEntries);
//       res.status(201).json({ message: "Reminders set successfully!" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to set reminders" });
//     }
//   });
// router.post("/set-reminders", async (req, res) => {
//     const { userId, reminders } = req.body; // { Breakfast: "08:00" }
  
//     try {
//       const reminderEntries = Object.entries(reminders).map(([mealType, time]) => {
//         const mealTime = new Date(`1970-01-01T${time}:00Z`);
//         const reminderTime = new Date(mealTime.getTime() - 5 * 60 * 1000);
  
//         return {
//           userId,
//           mealType,
//           mealTime,
//           reminderTime,
//           isNotified: false,
//         };
//       });
  
//       await Reminder.insertMany(reminderEntries);
//       res.status(201).json({ message: "Reminder set successfully!" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to set reminders" });
//     }
//   });
  

// cron.schedule("* * * * *", async () => {
// try {
//   const now = new Date();
//   const reminders = await Reminder.find({
//     reminderTime: { $lte: now },
//     isNotified: false,
//   });

//   for (const reminder of reminders) {
//     console.log(`Reminder: Time for your ${reminder.mealType}!`);
//     reminder.isNotified = true;
//     await reminder.save();
//   }
// } catch (error) {
//   console.error("Error in sending reminders:", error);
// }
// });

//   module.exports = router;
  