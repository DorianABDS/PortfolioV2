const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Model import
const Skill = require('./models/Skill');

const app = express();
app.use(cors());
app.use(express.json());

// Route test
app.get('/api', (req, res) => {
  res.json({ message: 'API running' });
});

// Route to retrieve skills from MongoDB
app.get('/api/skills/grouped', async (req, res) => {
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

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));