const express = require('express')
const app = express()
const drinks = require('./models/drinks.js'); 

app.listen(3000,()=>console.log('Welcome to the Gitpub App!'))

app.get("/",(req,res)=>{
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks",(req,res)=>{
    res.render('drinks_index.ejs', {allDrinks: drinks})
})