const SendinBlueApi = require('sib-api-v3-sdk');
const defaultClient = SendinBlueApi.ApiClient.instance;
const welcomeTemplate = require('./templates/welcome');

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const apiInstance = new SendinBlueApi.SMTPApi();

module.exports = {
    sendWelcomeEmail: function sendWelcomeEmail(email) {
        const sendSmtpEmail = new SendinBlueApi.SendSmtpEmail();

        Object.assign(sendSmtpEmail, {
            sender: { "name": "Hodlio Team", "email":"team@hodlio.com" },
            to: [{ email: email }],
            htmlContent: welcomeTemplate(email),
            subject: 'Welcome to Hodlio!'
        });

        return apiInstance.sendTransacEmail(sendSmtpEmail);
    }
};