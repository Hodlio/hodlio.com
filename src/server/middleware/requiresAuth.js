module.exports = function requiresAuth(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        res.status(401);
        res.send();
    }
};