import express from "express";
import bodyParser from "body-parser";
//code for sanding the html file from the server to the end user
//it figures out the fil path dynamicly
//what it does is fighre out the absulute path from from the relative path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = ""

//in here the server phrases the input from the user into a format that's more comfortable to work with
app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body['street'] + req.body['pet'] + '💀';
  next();  
}

app.use(bandNameGenerator);

app.post("/submit", (req, res)=> {
  res.send(`<h1>your band name is:</h1><h2> ${bandName}</h2>`)
});

//sending the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

