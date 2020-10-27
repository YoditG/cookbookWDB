require('dotenv').config({path: '/home/yodit/Dokumente/FullStackWebAndApp/contentful_cookbook/.env'});
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const pool = new Pool()

app.use(bodyParser.json());

app.use(cors());

app.get('/',(req,res)=>{
    pool
        .query("SELECT NOW()")
        .then((data) => console.log("hallo"))
        .catch((err) => res.send("chicken"));
})

app.get('/cards',(req,res)=>{
    pool
        .query("SELECT * FROM cards")
        .then((data) => res.send(data))
        .catch((err) => res.sendStatus(500));
})

app.get('/cards/:id',(req,res)=>{
    const { id } = req.params;
    pool
        .query("SELECT * FROM users WHERE id=$1",[id])
        .then((data) => res.send(data))
        .catch((err) => res.sendStatus(500));
})


app.listen(3030,()=>{
    console.log("server is listening!")
})