const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Route de test
app.get('/api', (req, res) => {
  res.json({ message: 'API running' });
});

// ✨ AJOUTER CES LIGNES ✨
// Importer et utiliser les routes skills
const skillsRoutes = require('./routes/skills');
app.use('/api/skills', skillsRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));