const jwt = require('jsonwebtoken');

const { JWT_SECRET = 'segredo-em-dev' } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'É necessário estar logado.' });
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
  } catch (err) {
    return res.status(401).send({ message: 'Token inválido ou expirado.' });
  }

  return next();
};
