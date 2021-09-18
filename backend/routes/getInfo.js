const router = require("express").Router();
let user = require("../models/User");

router.route("/:nic").get((req, res) => {
  user
    .find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
