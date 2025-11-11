// Import Mongoose library
const mongoose = require('mongoose');

// Define the schema for skills
const skillSchema = new mongoose.Schema({
    frontend: [String],
    backend: [String],
    tools: [String]
});

// Export the Skill model with 'skills' as collection name
module.exports = mongoose.model('Skill', skillSchema, 'skills');