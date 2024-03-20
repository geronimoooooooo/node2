

let now = new Date();
console.log(now.toISOString());
console.log(now.toISOString().slice(0,-5)+"Z");
console.log(now.toISOString().replace(/[.]\d+/, ''));
console.log(now.toISOString().replace('T', ' ').replace(/[.]\d+/, ''));


import express from "express";
// const https = require('https');
import https from "https"
// const fs = require('fs');
import fs from "fs"
const app = express()
import * as dotenv from "dotenv"; 
dotenv.config();

app.get('/', (req, res) => {  
  res.send('startseite');
  //res.json({ success: true })
});

app.get('/home', (req, res) => {
  console.log("logger in app.get home");    
  res.send('Home Page');
});

// const options = {
//   pfx: fs.readFileSync('sslcert/STAR_researchstudio_at.pfx')
// };

// const httpsServer = https.createServer({
//     key: fs.readFileSync('privateKey.key'),
//     cert: fs.readFileSync('certificate.crt'),
//   }, app);

 var privateKey  = fs.readFileSync('sslcert/researchstudio_at.key', 'utf8');
 var certificate = fs.readFileSync('sslcert/STAR_researchstudio_at.crt', 'utf8');

 var credentials = {key: privateKey, cert: certificate};

// const credentials = {
//   pfx: fs.readFileSync('sslcert/STAR_researchstudio_at.pfx')
// };

// var httpsServer = https.createServer(credentials, app);

// https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.send('hello world\n');
// }).listen(8000);

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(process.env.PORTHTTPS, (err) => {
  if(err){
    console.log(new Date().toISOString()+` https server could not start on port: ${process.env.PORTHTTPS}`);
  }else{
    console.log(new Date().toISOString()+` https server running on port: ${process.env.PORTHTTPS}`);
  }
    });