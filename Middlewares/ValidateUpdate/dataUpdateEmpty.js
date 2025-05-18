const cleanEmptyFields = (req, res, next) => {
    Object.keys(req.body).forEach(key => {
      if (req.body[key] === '') {
        delete req.body[key];
      }
    });
    next();
  };

export default cleanEmptyFields
  