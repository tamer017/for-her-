// require("dotenv").config();
const mongoose = require("mongoose");
const url = 'mongodb://localhost/MyDataBase'
const connectDB = () => {
  mongoose.connect(url, { useNewUrlParser: true })
  const con = mongoose.connection
  con.on('open', () => {
    console.log('connected...')
  })
  con.on("error",()=>{
    console.log("error")
  })

};

module.exports = connectDB;