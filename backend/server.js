const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Model imports
const Skill = require('./models/Skill');
const Project = require('./models/Project');

const app = express();
app.use(cors());
app.use(express.json());

// Route test
app.get('/api', (req, res) => {
  res.json({ message: 'API running' });
});

// Route to retrieve skills from MongoDB
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.findOne();
    if (!skills) {
      return res.status(404).json({
        message: 'Aucune compétence trouvée'
      });
    }
    res.json(skills);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({
      message: 'Erreur serveur',
      error: error.message
    });
  }
});

// Route to retrieve all projects from MongoDB
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({
      message: 'Erreur serveur',
      error: error.message
    });
  }
});

// Route to retrieve a single project by ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        message: 'Projet non trouvé'
      });
    }
    res.json(project);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({
      message: 'Erreur serveur',
      error: error.message
    });
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));