const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: 
  { type: String,
    required: true
 },
  email: 
  { type: String, 
    required: true, 
    unique: true 
},
  address: 
  { type: String, 
    required: true 
},
  pronoun:
   { type: String,
     required: true
 },
  company:
   { type: String, 
    required: true
 }
});

const ContactModel = mongoose.model('Contact', contactSchema);

module.exports = ContactModel;
