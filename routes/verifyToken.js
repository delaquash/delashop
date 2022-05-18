const jwt = require('jsonwebtoken');

/**
 * If the request has a token in the header, verify the token and if it's valid, add the user to the
 * request and call the next function. If the token is not valid, send a 403 response. If there is no
 * token in the header, send a 401 response.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you are done with your middleware.
 */
const verifyToken =(req, res, next) => {
    const authHeaders = req.headers.token;
    if(authHeaders) {
        const token = authHeaders.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) res.status(403).json("Token is not valid");
            req.user = user
            next()
        })
    } else {
        res.status(401).json("You are not authenticated")
    }
};

const verifyTokenAuthorization =(req, res, next)=> {
        verifyToken(req, res, () => {
            if(req.user.id === req.params.id || req.user.isAdmin) {
                next()
            } else {
                res.status(403).json("You are not allowed to do that")
            }
        })
}

module.exports =  { verifyToken, verifyTokenAuthorization };