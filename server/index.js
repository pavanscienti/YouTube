import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.error('Error connecting to the database:', err.message);
    });
};


app.use(cookieParser())
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

app.use((err,req,res,next)=>{
const status = err.status || 500;
const message = err.message || "Some thing went wrong";
return res.status(status).json({
  success: false,
  status,
  message
})
})

app.listen(8000, () => {
  connect();
  console.log('Server is running on port 8000');
});