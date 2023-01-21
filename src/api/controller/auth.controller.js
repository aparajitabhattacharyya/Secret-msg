function attemptlogin(req, res) {
    const body = req.body;

    if (body.email && body.password) {

    } else {
        res.status(404).send({ message: "Please provide valid email and password." })
    }
}

module.exports = {
    attemptlogin
}