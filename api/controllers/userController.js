const { NotFound, BadRequest } = require("../utils/errors");

exports.getAll = async (req, res) => {
  const users = [];
  // throw new BadRequest("teste3 deu erro");
  // throw new NotFound("teste3 deu erro");
  // throw new Error("deu erro aqui");

  return res.json(users);
};
