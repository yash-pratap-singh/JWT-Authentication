require('dotenv').config();
const jwt = require('jsonwebtoken');


const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ msg: "No Token Present" });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username}=decoded;
        req.person={id,username};
        next();
    } catch {
        res.status(401).json({ msg: "Not access to this route" });
    }
}

module.exports = authMiddleware;