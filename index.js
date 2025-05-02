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

app.get('/', (req, res) => {
    res.status(200).send(`<div style="text-align: center; background-color:purple;  padding: 10px;"><h1>Login & Signup Page</h1></div>`)
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("App is listening with port",port);
})
