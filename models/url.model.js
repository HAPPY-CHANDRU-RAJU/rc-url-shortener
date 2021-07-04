const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  urllink: {
    type: String, required: true
  },
  shortlink: {
    type: String, required: true, unique: true
  },
}, {
  timestamps: true,
});

const Url = mongoose.model('urls', urlSchema);

module.exports = Url;

