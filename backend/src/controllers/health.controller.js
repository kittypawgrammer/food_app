// Controllers hold the logic for a route: read req, send res.
exports.getHealth = (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
};
