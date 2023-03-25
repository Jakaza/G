const { sendMessage } = require('../helpers/nodemail');

const sendEmail = (req, res) => {
    const { username, email, subject, message } = req.body;
    sendMessage(username, email, subject, message)
        .catch(error => {
            res.status(400).send({
                message: 'success',
                error: error.message,
                hint: "Internal error, try agian"
            });
            return;
        })

    res.status(200).send({
        message: 'success',
        error: '',
        hint: "Email was succefully sent"
    });
}


module.exports = { sendEmail }