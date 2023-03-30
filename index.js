import express from 'express';
import cors from 'cors'
import Mailer from './mailer.js'

const {json, urlEncoded} = express;

const app = express();

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/', (req, res) => {
  res.send('<Conectado a la api>')
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)

  const mailer = new Mailer
  mailer.execute();
})