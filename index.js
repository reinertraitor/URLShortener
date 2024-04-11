const express =require("express")
const urlRoute = require('./routes/url')
const app=express()
const port=8000

app.use("/url",urlRoute);

app.listen(port, ()=> {
    console.log(`server is running on: ${port}`)
})