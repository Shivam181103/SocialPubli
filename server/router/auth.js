const express = require("express");
const User = require("../model/userSchema");

const router = express.Router();

router.get("/register", (req, res) => {
  res.send(`heelo woerfdhfsd`);
});

router.post("/register", async (req, res) => {
  const {
    name,
    email,
    referral,
    city,
    dob,
    gender,
    password,
    cpassword,
    mobileNumber,
    Genre: {
      beauty,
      fashion,
      tech,
      lifestyle,
      food,
      travel,
      fitness,
      wedding,
      entertainment,
      decor,
      parenting,
      photography,
      design,
      culture,
      sports,
      luxury,
      repost,
      diy
    },
    instagram,
    youtube,
    blog
  } = req.body;

console.log(travel);
console.log(culture);

  if (
    !name ||
    !email ||
    !password ||
    !cpassword ||
    !city ||
    !dob ||
    !gender ||
    !mobileNumber ||
    !(
      beauty ||
      fashion ||
      tech ||
      lifestyle ||
      food ||
      travel ||
      fitness ||
      wedding ||
      entertainment ||
      decor ||
      parenting ||
      photography ||
      design ||
      culture ||
      sports ||
      luxury ||
      repost ||
      diy
    )
  ) {
    return res.status(422).json({
      error: "something missing",
    });
  }

  try {
    let userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({
        error: "user exist",
      });
    } else if (password != cpassword) {
      return res.status(422).json({
        error: "password not same",
      });
    }
    const user = new User({
        name,
        email,
        referral,
        city,
        dob,
        gender,
        password,
        cpassword,
        mobileNumber,
        Genre: {
          beauty,
          fashion,
          tech,
          lifestyle,
          food,
          travel,
          fitness,

          wedding,
          entertainment,
          decor,
          parenting,
          photography,
          design,
          culture,
          sports,
          luxury,
          repost,
          diy
        },
        instagram,
        youtube,
        blog
    });
    await user.save();
    res.status(201).json({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.patch("/register", async (req,res)=>{

  

})
module.exports = router;
