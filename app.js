const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 1090;

app.use(morgan('combined'))

app.get("/", (req,res) =>{
    res.send('hello word Code baby 5555');
})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.red(port));
})