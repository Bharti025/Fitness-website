const mongoose =require("mongoose");
const dotenv =require('dotenv');
const express=require('express');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const cors =require('cors');
const bodyParser =  require('body-parser');
const AuthRouter=require('./routes/AuthRouter');
const ProductRouter=require('./routes/ProductRouter')
// const dietRouter=require('./routes/diet')
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
// app.use("/diets",dietRouter);
app.use("/auth",AuthRouter);
app.use("/products",ProductRouter)
app.use(bodyParser.json());
// const PORT=process.env.PORT||8000;
const uri=process.env.db;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Connected to MongoDB with Mongoose!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });    

   app.get("/ping",(req,res)=>{
        res.send("Hello ji, I am bharti");
     })

     const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.Gmail_user,
            pass: process.env.USER_PASS
        },
    });
    
    app.post('/api/set-reminder', (req, res) => {
         const { mealType, userEmail } = req.body;
        // const {mealType}=req.body;
         console.log(mealType);
         console.log(userEmail);
        // Example: Schedule reminder for 5 minutes before mealType (assume times are predefined)
        const mealTimes = {
            breakfast: '9:00',
    lunch: '13:00',
    snack:'17:00',
    dinner: '20:00',
        };
    
        const mealTime = mealTimes[mealType];
        if (!mealTime) {
            return res.status(400).send('Invalid meal time');
        }
    console.log(mealTime);
        // const reminderTime = new Date();
        const reminderTime = new Date("2025-01-27T12:15:09.710Z");
        const [hours, minutes] = mealTime.split(':');
        reminderTime.setHours(hours);
        reminderTime.setMinutes(minutes - 5);
      
  console.log("UTC Time:", reminderTime.toISOString());
  console.log("Local Time:", reminderTime.toLocaleString());

       console.log(reminderTime);
        schedule.scheduleJob(reminderTime, () => {
            const mailOptions = {
                from: 'bhartiwadhwa025@gmail.com',
                to: `${userEmail}`,
                subject: `Reminder: ${mealType}`,
                text: ` Hi,This is your reminder for ${mealType} scheduled at ${mealTime}.`,
            };
         console.log(mailOptions);
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        });
    
        res.send('Reminder scheduled successfully!');
    });
 app.listen(8080, ()=>{
        console.log("Server is running")
    })

    
    // Fetch diet schedule
   