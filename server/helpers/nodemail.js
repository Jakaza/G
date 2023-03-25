const nodemailer = require("nodemailer");

async function sendMessage(userName, userEmail, userSubject, userMessage) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.APP_USER, // email
            pass: process.env.APP_PASSWORD, // app password
        },
    });

    let info = await transporter.sendMail({
        sender: `${userEmail}`,
        from: `${userEmail}`, // sender address
        to: "goodnessjakazac@gmail.com",
        replyTo: `${userEmail}`,
        subject: `${userSubject}`, // Subject line
        text: `${userMessage}`, // plain text body
        html: `<b>${userMessage}</b>`, // html body
    });

    info = await transporter.sendMail({
        sender: "goodnessjakazac@gmail.com",
        from: "goodnessjakazac@gmail.com", // sender address
        to: `${userEmail}`,
        replyTo: 'goodnessjakazac@gmail.com',
        subject: `Confirmation`, // Subject line
        text: `Hey ${userName}`, // plain text body
        html: `
        <p>Dear <b>${userName}</b></p>
        <p>This is to confirm I have received your email. I will get back to you as soon as possible.</p>
        <p>Regards,</p>
        <p>Themba G Chauke</p>
        `, // html body
    });
}

module.exports = { sendMessage }