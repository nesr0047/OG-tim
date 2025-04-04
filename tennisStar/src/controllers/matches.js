const MatchesService = require("../services/matches");
const { requestHandler } = require("./utils");

const createOne = requestHandler(async (req, res) => {
  const newMatch = await MatchesService.createOne(req.body);
  console.log("?");
  res.status(201).json({
    data: newMatch,
  });
});

const getAll = requestHandler(async (_, res) => {
  const matches = await MatchesService.getAll();
  res.json({
    data: matches,
  });
});

const getOne = requestHandler(async (req, res) => {
  const match = await MatchesService.getOne(req.params.id);
  res.json({
    data: match,
  });
});

const updateOne = requestHandler(async (req, res) => {
  const match = await MatchesService.updateOne(req.params.id, req.body);
  res.json({
    data: match,
  });
});

const deleteOne = requestHandler(async (req, res) => {
  const match = await MatchesService.deleteOne(req.params.id);
  res.json({
    data: match,
  });
});

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
