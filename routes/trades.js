const express = require("express");
const {
  getAllTrades,
  createTrade,
  findTrade,
  throwError,
} = require("../controllers/trades");
const router = express.Router();

router.get("/", getAllTrades);

router.post("/", createTrade);

router
  .route("/:id")
  .get(findTrade)
  .delete(throwError)
  .patch(throwError)
  .put(throwError);

module.exports = router;
