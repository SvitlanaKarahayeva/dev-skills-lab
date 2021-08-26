const Skill = require('../models/skill')

// Shows the skills from models/skill.js file + added skills
function showSkillsList(req, res) {
    console.log(Skill)
    res.render('skills/home', {skills: Skill})
    console.log(req.params)

}
//deletes skills
function removeSkill(req, res){
    console.log(req.params)
    let index = Skill.findIndex(el => el.id == req.params.skillID)
    let newSkills = Skill.splice(index, 1)
    res.render('skills/home', {skills: Skill})
}
//shows each skill details
function showOneSkill(req, res){
    console.log(req.params.skillID) //params and then route //:skillID
        
    let mySkill = Skill.find(element => element.id == req.params.skillID)
    //we use req.params.skillID to get the ID number in the url
    res.render('skills/skillDetails', {skills: mySkill}) 
    
}
   
//creates a new skill
function createSkill(req, res){
    console.log(req.body)
    Skill.push({
        id: req.body.skillID,
        name: req.body.skillName,
        type: req.body.skillType
    }) 
    res.render('skills/home', {skills: Skill})
    
}

module.exports = {
    showSkillsList,
    removeSkill,
    showOneSkill,
    createSkill
}