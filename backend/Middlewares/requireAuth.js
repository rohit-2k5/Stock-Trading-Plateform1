const jwt = require("jsonwebtoken");

module.exports.requireAuth = (req, res, next) => {
  try {
    // Get token from cookie or Authorization header
    const token = req.cookies.token || req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }

    // Verify token
    jwt.verify(token, process.env.TOKEN_KEY, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized, token invalid" });
      } else {
        req.userId = decodedToken.id; // attach user id to request
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Not authorized" });
  }
};
