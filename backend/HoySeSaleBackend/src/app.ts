import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const CURRENT_VERSION = 'v1';
const API_URL = `/api/${CURRENT_VERSION}`

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


// define the routers
const entertaiment = require("./api/routes/entertainmentRouter");
const locals = require("./api/routes/localsRouter");

app.use(`${API_URL}/entertainments`, entertaiment);
app.use(`${API_URL}/locals`, locals);


// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001 ekf{wefn{ef');
});