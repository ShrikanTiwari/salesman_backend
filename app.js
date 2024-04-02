const express = require('express');
const body_parser=require('body-parser');
const userRouter=require('./routers/user.router');
const cors = require('cors');


const app=express();
app.use(cors());
app.use(express.json());
app.use(body_parser.json({ limit: '50mb' }));
app.use('/',userRouter);

module.exports = app;