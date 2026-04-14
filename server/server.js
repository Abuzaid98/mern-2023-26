const express = require('express');
const app = express();
const router = require('./router/auth-router')

// app.get("/", (req, res)=>{
//     res.status(200).send("Hey its Abu Zaid.");
// })

// app.get("/about-us", (req, res)=>{
//     res.status(200).send("This is a about us page - haha");
// })

// to pass the json data
app.use(express.json());

app.use("/api/auth/", router);



const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server isssss runnning on the: ${PORT}`);
})