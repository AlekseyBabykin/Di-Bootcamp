const logger = (req, res, next) => {
  consolr.log(req.url);
  consolr.log(req.params);
  consolr.log(req.query);
  consolr.log(req.body);
  next();
};

const auth = (req, res, next) => {
  const user = req.query.user;
  if (user == "admin") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = { logger, auth };
