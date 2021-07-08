const { Router } = require("express");
const router = Router();

// router.use("/", (req, res) => {
//   res.send("First Page2");
// });

router.use("/admin", require("./admin"));

module.exports = router;
