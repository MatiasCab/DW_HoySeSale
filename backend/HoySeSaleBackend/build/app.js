"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const CURRENT_VERSION = 'v1';
const API_URL = `/api/${CURRENT_VERSION}`;
// defining the Express app
const app = (0, express_1.default)();
// adding Helmet to enhance your API's security
app.use((0, helmet_1.default)());
// using bodyParser to parse JSON bodies into JS objects
app.use(body_parser_1.default.json());
// enabling CORS for all requests
app.use((0, cors_1.default)());
// adding morgan to log HTTP requests
app.use((0, morgan_1.default)('combined'));
// define the routers
const entertaiment = require("./api/routes/entertainmentRouter");
const locals = require("./api/routes/localsRouter");
app.use(`${API_URL}/entertainments`, entertaiment);
app.use(`${API_URL}/locals`, locals);
// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001 ekf{wefn{ef');
});
