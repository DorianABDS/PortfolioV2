// Import Mongoose library
const mongoose = require('mongoose');

// Define the schema for projects
const projectSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: [String],
    githubUrl: String,
    siteUrl: String,
    order: {
        type: Number,
        default: 0
    }
});

// Export the Project model with 'projects' as collection name
module.exports = mongoose.model('Project', projectSchema, 'projects');