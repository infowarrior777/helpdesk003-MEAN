var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');



// Create the MovieSchema.
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
   // required: true
  },
  lastname: {
    type: String,
   // required: true
  },
  email: {
    type: String,
   // required: true
  },
  auth: {
    type: String,
   // required: true
  }
});

// Export the model.
module.exports = mongoose.model('user', UserSchema);







// added 11-4-16 pswd hash gen & passport exports from loginapp



module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
          newUser.password = hash;
          newUser.save(callback);
      });
  });
}

module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
  });
}