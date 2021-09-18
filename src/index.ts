import app from './config/app';
import { logger } from './util/logger';
import './util/module-alias';

const port = process.env.PORT || 3000;

const startServer = () => {
  logger.info(`App running at port: ${port}`);
};

app.listen(port, startServer);
