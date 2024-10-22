const { UnauthenticatedError, UnauthorizedError } = require('../errors');
const { isTokenValid } = require('../utils/jwt');

const authenticateUser = async (req, res, next) => {
  try {
    let token;
    // check header
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      throw new UnauthenticatedError('Authentication invalid');
    }

    const payload = isTokenValid({ token });

    // Attach the user and his permissions to the req object
    req.user = {
      email: payload.email,
      role: payload.role,
      name: payload.name,
      id: payload.userId,
    };

    next();
  } catch (err) {
    if (err instanceof UnauthenticatedError) {
      return res.status(401).json({ message: err.message });
    } else {
      console.error('Error during authentication:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizeRoles,
};
