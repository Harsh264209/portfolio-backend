
const mongoose = require('mongoose');

const VisitorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Visitors = mongoose.model('Visitors', VisitorsSchema);

module.exports = Visitors;
