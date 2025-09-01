export const isAuthenticated = (req, res, next) => {
  try {
    // Example: JWT check
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // yahan JWT verify karna hota hai
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
export default isAuthenticated;