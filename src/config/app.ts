import express from 'express';
import mongoose from 'mongoose';
import { logger } from '../util/logger';
import hobbieRoutes from '../app/hobbies/routes';

const app = express();

mongoose
  .connect('mongodb://localhost:27017/pkt_db')
  .then(() => logger.info('Database has been connected'))
  .catch((err) => logger.error(err));

app.use(express.json());
app.use('/', hobbieRoutes);

export default app;
