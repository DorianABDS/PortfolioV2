const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET all skills
router.get('/', async (req, res) => {
    try {
        const skillsDoc = await Skill.findOne();

        if (!skillsDoc) {
            return res.json([]);
        }

        const allSkills = [
            ...(skillsDoc.frontend || []),
            ...(skillsDoc.backend || []),  // ✅ Corrigé
            ...(skillsDoc.tools || [])
        ];

        res.json(allSkills);
    } catch (error) {
        res.status(500).json({ 
            message: 'Erreur serveur', 
            error: error.message 
        });
    }
});

module.exports = router;