import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import { errorHandler } from './middleware/errorHandler.js';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const swaggerDocument = YAML.load('./src/openapi.yaml');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;