
const express = require('express');
const User = require('../model/userSchema');

const router = express.Router();


router.get('/register', (req, res) => {
    res.send(`heelo woerfdhfsd`)
})

router.post('/register', async (req, res) => {

    const {name,
        email,
        referral,
        city,
        dob,
        gender,
        password,
        cpassword } = req.body;

    if (!name || !email || !password || !cpassword || !referral || !city || !dob || !gender)  {
        return res.status(422).json({
            error: 'something missing'
        })
    }
    try {
        let userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({
                error: 'user exist'
            })
        } 
        else if( password != cpassword){
            return res.status(422).json({
                error: 'password not same'
            })
        }
        const user = new User({ name, email,
            referral,
            city,
            dob,
            gender,
            password,
            cpassword })
        await user.save() 
        res.status(201).json({ message: 'user registered successfully',
        
    })

    }
    catch (err) {
        console.log(err)
    }

})

module.exports = router;