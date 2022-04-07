const express = require('express')
const app = express()
const drinks = require('./models/drinks.js'); 
const food = require('./models/food.js')



app.listen(3000,()=>console.log('Welcome to the Gitpub App!'))

app.get("/",(req,res)=>{
    res.send('<html><body><h1>Welcome to the Gitpub App!</h1><a href="./drinks">Drinks Index</a></body></html>')
})

app.get("/foods",(req,res)=>{
    res.render('foods_index.ejs', {allFoods: food})
})

app.get("/foods/:id", (req, res)=>{
    res.render("foods_show.ejs", {food: food[req.params.id]})
})

app.get("/drinks",(req,res)=>{
    res.render('drinks_index.ejs', {allDrinks: drinks})
})

app.get("/drinks/:id",(req,res)=>{
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]})
})