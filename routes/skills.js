var express = require('express');
var router = express.Router();

const skillsControllers = require('../controllers/skills')

router.get('/home', skillsControllers.showSkillsList)
router.get('/remove/:skillID', skillsControllers.removeSkill)
router.get('/:skillID', skillsControllers.showOneSkill)
router.post('/', skillsControllers.createSkill)



module.exports = router;
