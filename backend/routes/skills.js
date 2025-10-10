const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

router.get('/', async (req, res) => {
    try {
        const SkillsDoc = await Skill.findOne();

        if (!SkillsDoc) {
            return res.json([])
        }

        const allSkills = [
            ...(SkillsDoc.frontend || []),
            ...(SkillsDoc.baqckend || []),
            ...(SkillsDoc.tools || [])
        ];

        res.json(allSkills)
    } catch (error) {
        res.status(500).json({ message : 'Erreur serveur', error: error.message });
    }
})

module.exports = router;