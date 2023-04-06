const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    //   required: true,
    },
  },
  {
    timestamps: true,
  }
);

// pre - save is a trigger that gets a function and executes it before a user object is saved.
userSchema.pre('save',async function encryptPassword(next){
    const user = this;
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    next();
})

userSchema.methods.isValidPassword = function checkValidity(password){
    const user = this;
    const compare = bcrypt.compareSync(password, user.password);
    return compare;
}

module.exports = mongoose.model("User", userSchema);


