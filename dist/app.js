"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var reportsRouter = require('./routes/reports');
var app = (0, _express["default"])();

// settings
app.set("port", _config["default"].port);
app.use(logger('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/api', reportsRouter);
var _default = app;
exports["default"] = _default;