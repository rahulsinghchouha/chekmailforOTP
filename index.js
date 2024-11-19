const express = require('express');
const {sendMail} = require("./sendMail");

const app = express();

app.listen(4000,()=>{
    console.log("app listening on 4000");
})

app.get("/sendmail",sendMail);
