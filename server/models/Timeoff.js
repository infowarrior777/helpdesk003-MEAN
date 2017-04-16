var mongoose = require('mongoose');

// Create the MovieSchema.
var TimeOffSchema = new mongoose.Schema({
  name: {
    type: String,
  //  required: true
  },
  location: {
    type: String,
  //  required: true
  },
  advanced: {
    type: String,
   // required: true
  },
  dateawayfrm: {
    type: String,
  //  required: true
  },
  dateawayto: {
    type: String,
   // required: true
  },
  absensefrm: {
    type: String,
   // required: true
  },
  absenseto: {
    type: String,
   // required: true
  },
  daytotal: {
    type: String,
   // required: true
  },
  hourtotal: {
    type: String,
   // required: true
  },
  applyto: {
    type: String,
   // required: true
  },
  absensereason: {
    type: String,
   // required: true
  },
  absensereportedto: {
    type: String,
   // required: true
  },
  absensevia: {
    type: String,
   // required: true
  },
  absensereporteddate: {
    type: String,
   // required: true
  },
  buyoutvaca: {
    type: String,
   // required: true
  },
  boyoutsick: {
    type: String,
   // required: true
  },
  signature: {
    type: String,
   // required: true
  },
  date: {
    type: String,
   // required: true
  }
});

// Export the model.
module.exports = mongoose.model('timeoff', TimeOffSchema);