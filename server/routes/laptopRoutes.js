const express = require("express");
const {
  getAllLaptops,
  getLaptop,
  getLoptopBetweenPrice,
  addNewLaptop,
  updateLaptop,
  deleteLaptop,
} = require("../controllers/laptopControllers");

const router = express.Router();

router.get("/", getAllLaptops);
router.get("/:laptopId", getLaptop);
router.get("/:lowPrice/:highPrice", getLoptopBetweenPrice);
router.post("/", addNewLaptop);
router.put("/:laptopId", updateLaptop);
router.delete("/:laptopId", deleteLaptop);


module.exports = router;

