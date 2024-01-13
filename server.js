const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")



const port=5003


connectDB()
app.use("/api" , require ("./routes/routeContact") )
app.listen(port,(err)=>{
    err?console.log(err):console.log(`The server is running on port : ${port}`)
})
