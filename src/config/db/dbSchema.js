const mongoose = require('mongoose');
const schema = mongoose.Schema;

const crypto = require('crypto');

const dbSchema = new schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        select: true,
        set: value => crypto.createHash('md5').update(value).digest('hex')
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

const DbSchema = mongoose.model('users', dbSchema);

module.exports = {DbSchema};