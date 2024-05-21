const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(contact);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.send('Contact deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.findContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
  } catch (error) {
    res.status(404).send('Contact not found');
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    // Retrieve all contacts from the database
    const allContacts = await Contact.find({});

    // Send a response with the retrieved student data
    res.status(200).json(allContacts);
  } catch (error) {
    // Handle any errors during student retrieval
    res.status(500).json({ message: error.message }); // Provide a more specific error message
  }
};
 