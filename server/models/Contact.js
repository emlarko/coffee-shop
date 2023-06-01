const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
    query: {
        type: String,
        required: true,
      },
    sentConfirmation: {
        type: Boolean,
        default: false
    },
    receivedEmail: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
}

);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;