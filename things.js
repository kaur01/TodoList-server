var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
//  res.send("GET route on things.");
res.json([{
   id: 1,
   username: "samsepi0l"
 }, {
   id: 2,
   username: "D0loresH4ze"
 }]);
});



module.exports = router;
