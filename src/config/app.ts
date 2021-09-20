import express from 'express';
import mongoose from 'mongoose';
import { logger } from '../util/logger';
import hobbieRoutes from '../app/hobbies/routes';
import userRoutes from '../app/users/routes';
import swaggerDocument from '../../swagger.json';
import swaggerUi = require('swagger-ui-express');

const app = express();

mongoose
  .connect('mongodb://localhost:27017/pkt_db')
  .then(() => logger.info('Database has been connected'))
  .catch((err) => logger.error(err));

app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/hobbies', hobbieRoutes);
app.use('/users', userRoutes);

export default app;
