import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

const secureRoute = async (req, res, next) => {
  // Add `next` parameter
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" }); // Fixed typo
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password"); // current user
    if (!user) {
      return res.status(401).json({ error: "No user found" });
    }

    req.user = user;
    next(); // Call `next()` to proceed
  } catch (error) {
    console.error("Error in secureRoute:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default secureRoute;
