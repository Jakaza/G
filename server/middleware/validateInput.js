
const validateEmail = (req, res, next) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email } = req.body;
    if (!email.match(validRegex)) {
        res.status(422).send({
            message: 'failed',
            error: 'Invalid Email',
            hint: "Please enter valid email"
        });
        return;
    }
    next();
}


const validateField = (req, res, next) => {
    const { username, subject, message } = req.body;
    if (!username || !subject || !message) {
        res.status(400).send({
            message: 'failed',
            error: 'Missing input',
            hint: 'Fill all the input field'
        });
        return;
    }
    if (message.length < 5) {
        res.status(400).send({
            message: 'failed',
            error: 'Too short message',
            hint: 'Please send meaningful message'
        });
    }

    next();
}

module.exports = {
    validateEmail,
    validateField
}


