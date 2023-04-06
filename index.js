const express = require("express");
const apiRouter = require("./src/routes/index");
const authRouter = require('./src/routes/authRoutes')
const {connect} = require('./src/config/dbConfig')
const User = require('./src/models/user');
const bodyParser = require('body-parser'); 
const passport = require('passport');


const app = express();
require('./src/utils/auth')
require("dotenv").config();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',authRouter)


app.use("/api", passport.authenticate('jwt',{session:false}),apiRouter);

app.use(function(err,req,res,next){
  res.status(err.status || 500);
  res.json({
    success:false,
    error:err
  })
})

app.listen(process.env.PORT || 3000, async () => {
  connect();
  console.log(`Server started...`);
  // let user = await User.create({
  //   email:"abc@xyz.com",
  //   password:"BDVi;rbg",
  //   username:"Litun"
  // })
  // let savedUser = await User.find();
  // console.log(savedUser);
});

