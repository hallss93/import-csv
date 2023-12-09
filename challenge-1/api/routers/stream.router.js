const router = require("express").Router();

const customerModel = require("../../models/customer.model");

router.get("/", (req, res) => {
  customerModel
    .find()
    .then((customers) => {
      res.status(200).json(customers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Unable to get customers" });
    });
});

module.exports = router;
