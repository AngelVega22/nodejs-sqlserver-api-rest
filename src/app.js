import express from "express";
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import config from "./config";
const indexRouter = require('./routes/index');
const reportsRouter = require('./routes/reports');


const app = express();

// settings
app.set("port", config.port);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api',reportsRouter)

export default app;