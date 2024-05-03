import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import scoreRouter from './routes/scoreRoute.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.static('uploads'))

//Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('ScoreBoard Database has been successfully connected'))
    .catch((err) => console.log('Database Connection failed ', err))




//Middleware
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))



// Enable CORS for all routes
app.use(cors());

//AdminRoutes
app.use('/', scoreRouter)


app.listen(PORT, () => console.log(`Express Server created successfully on port ${PORT}`))
export default app;


