const express = require('express')
const app = express()
const drinks = require('./models/drinks.js'); 
const food = require('./models/food.js')



app.listen(3000,()=>console.log('Welcome to the Gitpub App!'))

app.get("/",(req,res)=>{
    res.send('<html> <head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head><body class="m-4"><h1>Welcome to the Gitpub App!</h1><a href="./drinks">Drinks Index</a><br><a href="./foods">Foods Index</a></body></html>')
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