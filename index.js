//#region importer
import * as dotenv from "dotenv"; 
dotenv.config();
// require('dotenv').config();
import https from "https"
// const https = require('https')

import fs from "fs"
// const fs = require('fs')
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
// const express = require('express');
// import { hello } from "./routes";
import { hello, xxx } from "./routes_get.js";
import { getDataFromForm } from "./routes_post.js";

//#endregion
const app = express()

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
app.set("view engine", "ejs");
// app.set("views", __dirname);

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

app.get('/xxx/x', xxx);
app.get('/hello', hello);
app.get('/', (req, res) => {  
  res.json({ success: true })
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

httpsServer.listen(process.env.PORTHTTPS, () => {
        console.log(`https server running on port: ${process.env.PORTHTTPS}`);
    });


