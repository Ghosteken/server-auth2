const mongoose = require('mongoose');

const User = new mongoose.Schema({

    name: { type: 'string', required: true },
    email: { type: 'string', required: true,  unique: true },
    password: { type: 'string', required: true },
    date: { type: 'date', default: Date.now },
    quote: { type: 'string' },

},
    {
        collection: 'user-data',
    }
)

const model = mongoose.model('user-data', User)

module.exports = model;