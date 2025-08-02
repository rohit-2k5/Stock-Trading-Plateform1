const express = require("express");
const router = express.Router();
const User = require("../schemas/UsersSchema");

router.post("/signup", async(req, res)=>{
    try{
    let {email, username, password} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

     // Create new user
        const user = new User({ email, username, password });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})
module.exports = router;