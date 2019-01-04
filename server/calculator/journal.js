function Journal(journal) {
  return (req, res, next) => {
    const trackId = req.get("X-Evi-Tracking-Id");
    if (trackId) {
      const { result } = res.locals;
      journal.add(trackId, req.path, req.body, result).then(next);
    } else {
      next();
    }
  };
}

module.exports = Journal;
