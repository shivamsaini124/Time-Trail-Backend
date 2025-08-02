const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;


const auth = (req, res,next) => {
    const token = req.headers.authentication;

    try{
        const payload = jwt.verify(token, JWT_SECRET);
        req.userId = payload.userId;
        next();
    }
    catch(err){
        res.status(401).json({
            message:"Invalid Token"
        });
    }
}

module.exports = {
    auth
}