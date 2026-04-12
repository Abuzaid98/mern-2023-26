const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Hey its Abu Zaid.");
})

app.get("/about-us", (req, res)=>{
    res.status(200).send("This is a about us page - haha");
})


const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server is runnning on the: ${PORT}`);
})