const Trade = require("../models/trades");

exports.getAllTrades = async (req, res, next) => {
  const trades = await Trade.findAll({
    order: [["id", "ASC"]],
  });

  return res.status(200).json(trades);
};

exports.createTrade = async (req, res, next) => {
  const trade = await Trade.create({ ...req.body });

  return res.status(201).json(trade.get());
};

exports.findTrade = async (req, res, next) => {
  const id = req.params.id;

  const trade = await Trade.findOne({
    where: { id },
    order: [["id", "ASC"]],
  });

  if (!trade) {
    return res.status(404).send("ID not found");
  }

  return res.status(200).json(trade);
};

exports.throwError = async (req, res, next) => {
  return res.status(405).send("error");
};
