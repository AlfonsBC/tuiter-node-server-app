import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import tuitsController from './controllers/tuits/tuits-controller.js';
import UserController from './controllers/users/users-controller.js';
import mongoose from 'mongoose';
const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

app.use(express.json());
app.use(cors())
tuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);