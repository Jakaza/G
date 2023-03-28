

const verifyuser = (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;

    if ((username == 'jakaza10') && (password == 123)) {
        next();
    }
    res.redirect('/');
}



module.exports = {
    verifyuser
}