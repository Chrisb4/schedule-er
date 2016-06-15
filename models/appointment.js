var mongoose = require("mongoose");

var appointmentSchema = {
  startTime: String,
  clientName: String,
  clientEmail: String,
  massageType: String
};

var Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
