const jwt = require('jsonwebtoken')

const fetchUser = (req, res, next)=>{
    const token = req.header('auth-token')  
    if(!token){
        return res.status(400).json({err: "Plzz enter a valid token"})
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data.userEmail
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = fetchUser