var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  fullname: String
});

mongoose.model('User', UserSchema);