import express from 'express';
import multer from 'multer';
import {handleResumeUpload} from '../controllers/uploadController.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

router.post('/upload', upload.single('file'), handleResumeUpload);

export default router;


