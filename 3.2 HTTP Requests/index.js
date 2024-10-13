import express from "express";

const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`app listening on port${port}`);
    
});

app.get("/", (req, res)=> {
    res.send("<h1>hello world</h1>");
});

app.get("/about", (req, res)=> {
    res.send("<h1>about me</h1>");
});