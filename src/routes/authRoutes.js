const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res) => {
    res.status(200).json({
      success: true,
      message: "Signup successfully",
      data: {
        user: req.user,
      },
    });
  }
);

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, next) => {
    try {
      if (err || !user) {
        const error = new Error("Something went wrong.");
        return next(err);
      }
      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);
        const body = {
          _id: user._id,
          email: user.email,
        };
        const token = jwt.sign(
          {
            user: body,
          },
          "TOP_SECRET",
          { expiresIn: "123d" }
        );

        return res.status(200).json({
          success: true,
          message: "Successfully logged in",
          token,
        });
      });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  })(req, res, next);
});

module.exports = router;
