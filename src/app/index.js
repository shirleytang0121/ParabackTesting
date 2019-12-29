import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

export default function createApp() {
  const app = express();
  app.use(cors());
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  return app;
}
