

let now = new Date();
console.log(now.toISOString());
console.log(now.toISOString().slice(0,-5)+"Z");
console.log(now.toISOString().replace(/[.]\d+/, ''));
console.log(now.toISOString().replace('T', ' ').replace(/[.]\d+/, ''));



// const https = require('https');
import https from "https"
// const fs = require('fs');
import fs from "fs"

const options = {
  pfx: fs.readFileSync('sslcert/STAR_researchstudio_at.pfx')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);