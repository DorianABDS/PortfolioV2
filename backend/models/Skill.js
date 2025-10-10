const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    frontend: [String],
    backend: [String],
    tools: [String]
})

module.exports = mongoose.model('Skill', skillSchema, 'skills');