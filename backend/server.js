import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import uploadResume from './routes/upload.js'

const app= express();
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    


//routes
app.use("/api", uploadResume);



//server start
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

