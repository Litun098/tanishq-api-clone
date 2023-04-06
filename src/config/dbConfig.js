const mongoose = require('mongoose');
require('dotenv').config();

const connect = ()=>{
    mongoose.connect(process.env.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log("MongoDB connected successfully");
      }).catch((err) => {
        console.log("Couldn't connected to mongoDB", err);
    });
} 

module.exports = {
    connect
}