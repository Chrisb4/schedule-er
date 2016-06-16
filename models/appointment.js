var mongoose = require("mongoose");

var appointmentSchema = {
  fullName: String,
  email: String,
  message: String,
  time: String
};

var Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
