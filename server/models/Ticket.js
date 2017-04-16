var mongoose = require('mongoose');

// Create the MovieSchema.
var TicketSchema = new mongoose.Schema({
  name: {
    type: String,
  //  required: true
  },
  location: {
    type: String,
  //  required: true
  },
  url: {
    type: String,
   // required: true
  },
  issue: {
    type: String,
  //  required: true
  },
  priority: {
    type: String,
   // required: true
  },
  status: {
    type: String,
    default: 'Pending',
   // required: true
  },
  appointment: {
    type: String,
   // required: true
  }
});

// Export the model.
module.exports = mongoose.model('ticket', TicketSchema);