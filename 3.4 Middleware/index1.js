import express from "express";
import bodyParser from "body-parser";
//code for sanding the html file from the server to the end user
//it figures out the filem path dynamicly
//what it does is fighre out the absulute path from from the relative path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

//in here the server phrases the inputfrom the user into a format that's more comfortable to work with
app.use(express.urlencoded({extended:true}));

//this is where you actually send the file, in this case the html page for the website
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=> {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



