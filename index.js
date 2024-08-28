
const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

const PORT = 3000;

const app = express();

const DB ="mongodb://localhost:27017/byshop";


app.use(express.json());
app.use(authRouter);


//Craeting  An Api

//Connections
mongoose.connect(DB).then(()=>{
    console.log("Connection successful");
}).catch((e) =>{
    console.log(e);
});

app.listen(PORT,"0.0.0.0", () =>{
    console.log(`connected at port ${PORT}`);
});