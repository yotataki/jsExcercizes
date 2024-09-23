const fs = require("fs");

// fs.writeFile("massage.txt", "oi from peakey fucking blinders", (err)=> {
//     if (err) {
//         console.error("Error writing to file:" , err);
//         return;
        
//     }
//     console.log("File has been written successfully!");

// });

fs.readFile('massage.txt', "utf8", (err, data)=>{
    if (err) {
        console.error("Error reading this file", err);
        return;
    }
    console.log("File cintent: ", data);
})