
import scoreModel from '../models/scoreSchema.js'
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

export const test = (req, res) => {
    res.send('Test is working');
};

export const getAll = async (req, res) => {
    try {
        const scores = await scoreModel.find();
        const scoresWithUrls = scores.map(score => ({
            ...score.toJSON(),
            image: `http://localhost:8001/${path.basename(score.image)}` // Modify the URL as per your setup
        }));
        res.json(scoresWithUrls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const add = async (req, res) => {
    const { teamName, city, gamesPlayed, studentScore } = req.body;
    if (!req.file) {
        return res.status(400).json({ message: 'Image file is required' });
    }
    const image = req.file.path; // Multer adds the 'file' object to the request containing the uploaded file details
    const score = new scoreModel({ teamName, city, gamesPlayed, studentScore, image });

    try {
        const newScore = await score.save();
        res.status(201).json(newScore);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}