require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+15626774594',
    from: '+19203521201',
    body: 'Josh is streaming twitch.tv/jsans24',
  })
  .then(message => console.log(message.sid));