import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    // Get today's date
    const today = new Date();
    let tow ='';//what's the time of week
    let adv = '';//what's the advice
    // Use the getDay() method to get the day of the week
    const dayOfWeek = today.getDay();
    
    //advices waht to do based on time of the week
    if (dayOfWeek === 5 || dayOfWeek === 6) {
        tow = "the weekend";
        adv = 'have fun';
    } else {
        tow = 'a weekday';
        adv = 'work hard';
    }
    res.render("index.ejs", {dayType: tow, advice: adv});

});

app.listen(port, ()=>{console.log(`app running on port${port}`);
});