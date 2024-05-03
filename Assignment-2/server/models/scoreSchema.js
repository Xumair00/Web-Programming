import mongoose from "mongoose";

const scoreSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gamesPlayed: {
        type: Number,
        required: true,
    },
    studentScore: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // Assuming you'll store the path to the image
        required: true
    }
});

const scoreModel = mongoose.model('score', scoreSchema)
export default scoreModel