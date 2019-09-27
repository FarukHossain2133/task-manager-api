
const sgMail = require('@sendgrid/mail');
// const sendGridApiKey = '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';

sgMail.setApiKey(process.env.SEND_GRID_API);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fa905432@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}, Let me konw get along with the app`,    
    })
}

const sendCancealEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fa905432@gmail.com',
        subject: 'Please let us know why you canceal your account?',
        text: `We are sorry , ${name}, please came back to our site later`,
        html: `<h3>We are sorry</h3>
                <p style="color:green">what is your problem for delete your valuable accound</p>
            `
    })
}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancealEmail: sendCancealEmail
}