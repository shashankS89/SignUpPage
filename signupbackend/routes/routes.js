const { response } = require("express");
const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/signupModels");
const bcrypt = require("bcrypt");

router.post("/signup",async (req,res) => {
        
    const saltpass = await bcrypt.genSalt(10);
    const securepass = await bcrypt.hash(req.body.password, saltpass)    
    
    const signedUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:securepass
    });
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })

});

module.exports = router;