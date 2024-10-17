//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

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

var isUserAuthorized = false;

app.use(bodyParser.urlencoded({extended:true}));

function check_password(req, res, next) {
    const password = req.body["password"];
    if (password === "IloveProgramming") {
        isUserAuthorized = true;
    }
    next();

}
app.use(check_password);

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
    console.log("file sent");
    
});

app.post("/check", (req, res)=>{
    console.log(req.body);
    if (isUserAuthorized) {
        res.sendFile(__dirname+"/public/secret.html");
    } else {
        res.redirect("/");
    }
    
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});
