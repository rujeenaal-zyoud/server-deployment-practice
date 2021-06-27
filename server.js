'use strict';

//dependencies

const express = require('express');
const app =express();

//modules
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


app.get('/',(req,res)=>{
    res.send('Hello World');

});

app.get('/bad',(req,res)=>{
    //creat object ERROR
    //from MDN 
    throw new Error('Something went wrong');

})

//app.use() handles all the middleware functions.
//What is middleware?
//Middlewares are the functions which work like a door between two all the routes.

app.use('*', notFoundHandler);
app.use(errorHandler); 

//creat function to listen port

function start(PORT) {
    app.listen (PORT,()=>console.log(`Server is up  ${PORT}`))
}

//now will export the module to anther files

module.exports = {
    app :app,
    start :start,
};