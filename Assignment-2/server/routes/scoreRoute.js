import express from 'express';
import { test, getAll, add } from '../controller/scoreController.js';
import scoreModel from '../models/scoreSchema.js';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
const scoreRouter = express.Router();

// Middleware creation using cors
// Here the origin is the frontend from which the request is coming from
// You can use req, res over here, but to create clean code, we will use a function that does that for us

scoreRouter.get('/', test);
scoreRouter.get('/get', getAll);
scoreRouter.post('/add', upload.single('image'), add);
export default scoreRouter;
