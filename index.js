//#region importer
import * as dotenv from "dotenv"; 
dotenv.config();
// require('dotenv').config();
import https from "https"
// const https = require('https')

import fs from "fs"
// const fs = require('fs')
import path from "path";
// const path  = ('path');
import { fileURLToPath } from "url";
// const fileURLToPath = require('url');

import express from "express";
// const express = require('express');

import { hello, index3, xxx } from "./routes_get.js";
// const routes_get = require('./routes_get.js');

import { getDataFromForm, routerVar } from "./routes_post.js";
// const routes_post = require('./routes_post.js');

import {router2} from './login.js';

import { offers, routeGetOfferList, adder } from "./importer/LibRequireHelper.js";
//#endregion

const app = express()
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
app.set("view engine", "ejs");
app.set("views", __dirname);

//#region https
// const httpsServer = https.createServer({
//     key: fs.readFileSync('privateKey.key'),
//     cert: fs.readFileSync('certificate.crt'),
//   }, app);

var privateKey  = fs.readFileSync('sslcert/privateKey.key', 'utf8');
var certificate = fs.readFileSync('sslcert/certificate.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
//#endregion



app.get("/main", function (req, res) {
  var name = "hello";
  name = path.join(__dirname+'/index2.html');
  console.log(name);
  res.sendFile(path.join(__dirname+'/index2.html'));
  // res.render(__dirname + "index.html", { name: name });
});

app.get("/form", function (req, res) {    
  res.sendFile(path.join(__dirname+'/form.html'));
  // res.render(__dirname + "index.html", { name: name });
});

/* /game?name=oddball*/
app.get("/game", function (req, res) {
  var name = req.query.name;
  console.log(req.query.name);
  res.send(`this is a name: ${name} !`);
  //res.send("das ist ein Test: ${req.body.name } ")
  //res.render('the_template', { name: req.body.name });
});

// With middleware
app.use('/a1', function (req, res, next) {
  console.log("/");
  res.json(offers)
  next();
})


app.get('/xxx/x', xxx);
app.get('/hello', hello);
app.get('/', (req, res) => {  
  res.json({ success: true })
})
app.get('/index3', index3);

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
  res.send('im the home page of a router!');
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
  res.send('im the about page!');
});

// route middleware to validate :name
router.param('name', function(req, res, next, name) {
  // do validation on name here
  // blah blah validation
  // log something so we know its working
  console.log('doing name validations on ' + name);

  // once validation is done save the new item in the req
  req.name = name;
  // go to the next thing
  next();
});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
  res.send('hello ' + req.name + '!' + req.params.name);
});

routerVar.get('tri',)

app.route('/login')

  // show the form (GET http://localhost:8080/login)
  .get(function(req, res) {
      res.send('this is the login form');
  })

  // process the form (POST http://localhost:8080/login)
  .post(function(req, res) {
      console.log('processing');
      res.send('processing the login form!');
  });

// apply the routes to our application
app.use('/a', router);
app.use('/user', router2);

app.post('/form', getDataFromForm);
app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.post('/api/users', function(req, res) {
  const user_id = req.body.id;
  const token = req.body.token;
  const geo = req.body.geo;

  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});

httpsServer.listen(process.env.PORTHTTPS, () => {
        console.log(`https server running on port: ${process.env.PORTHTTPS}`);
    });


