import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';

connectDB();

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: 'http://localhost:8080' }));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`))