import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/Dbconfig.js';
import userRoutes from './routes/User.routes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use('/api/user', userRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
