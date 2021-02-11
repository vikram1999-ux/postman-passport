const data = require("../db");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var passportLocalMongoose = require("passport-local-mongoose");

var User = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  // username: {
  //   type: String,
  //   default: undefined,
  // },
  // password: {
  //   type: String,
  //   default: undefined,
  // },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
