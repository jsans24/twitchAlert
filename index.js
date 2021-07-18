require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUMBER;

const client = require('twilio')(accountSid, authToken);

const contacts = process.env.CONTACT_LIST.split(',')

for (let index = 0; index < contacts.length; index++) {
        client.messages
          .create({
            to: contacts[index],
            from: twilioNum,
            body: 'Josh is streaming twitch.tv/jsans24',
          })
          .then(message => console.log(message.sid));
    };
