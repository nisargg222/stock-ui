const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/signupmodel");
const userStockTemplateCopy = require("../models/userstockmodel");
const db = require("../models/queries");

router.post("/signup", (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    fullname: request.body.fullname,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.post("/signin", (request, response) => {
  const signedInUserReq = new signUpTemplateCopy({
    username: request.body.username,
    password: request.body.password,
  });
  signUpTemplateCopy.findOne(
    { username: signedInUserReq.username },
    "password",
    function (err, signedInUserDb) {
      if (err) return handleError(err);
      if (signedInUserReq.password == signedInUserDb.password) {
        console.log("Success");
        response.send("Success");
      } else {
        response.send("Fail");
      }
    }
  );
});
router.post("/addstock", (request, response) => {
  const userStockUserReq = new userStockTemplateCopy({
    username: request.body.username,
    symbol: request.body.symbol,
    quantity: request.body.quantity,
    price: request.body.price,
    date: request.body.date,
  });
  userStockUserReq
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});
router.post("/mystocks", (request, response) => {
  const userStockUserReq = new userStockTemplateCopy({
    username: request.body.username,
  });
  userStockTemplateCopy
    .find({ username: userStockUserReq.username })
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});
router.get("/symbols", db.getSymbols);
router.get("/names", db.getNames);
router.get("/stocks", db.getStocks);
router.get("/getname", db.getName);

module.exports = router;
