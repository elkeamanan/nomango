import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const serverHost = process.env.SERVER_HOST ?? 'localhost';
const serverPort = process.env.SERVER_PORT ?? 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(serverPort, () => {
  return console.log(`Express is listening at ${serverHost}:${serverPort}`);
});
