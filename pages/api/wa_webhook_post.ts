// import { RECIPIENT_WAID, ACCESS_TOKEN, VERSION, PHONE_NUMBER_ID } from '../../utils/constants';
// import axios from 'axios';
// const RECIPIENT_WAID = '919068583788';

// export default function handler(req: any, res: any) {
//   try {
//     console.log('POST: Someone is pinging me!');
//     var data = getTextMessageInput(RECIPIENT_WAID, 'Welcome to the Movie Ticket Demo App for Node.js!');
//     sendMessage(data)
//       .then(function (response: any) {
//         console.log(response)
//         // res.redirect('/);
//         res.status(200).json({ name: 'John Doe' });
//       })
//       .catch(function (error: any) {
//         console.log(error);
//         // console.log(error.response.data);
//         res.status(500).json({ name: 'inter error' });
//       });
//   } catch (error) {
//     console.error({ error })
//     res.status(500).json({ name: 'inter error' });
//   }

//   // res.status(200).json({ name: 'John Doe' })
// }


// async function sendMessage(data: any) {
//   var config = {
//     method: 'post',
//     url: `https://graph.facebook.com/${VERSION}/${PHONE_NUMBER_ID}/messages`,
//     headers: {
//       'Authorization': `Bearer ${ACCESS_TOKEN}`,
//       'Content-Type': 'application/json'
//     },
//     data: data
//   };

//   const a = await fetch(config.url, {
//     method: config.method,
//     headers: config.headers,
//     body: JSON.stringify(config.data)
//   })

//   return a.json();
// }

// function getTextMessageInput(recipient: any, text: any) {
//   return {
//     "messaging_product": "whatsapp",
//     "to": recipient,
//     "type": "template",
//     "template": {
//       "name": "hello_world",
//       "language": {
//         "code": "en_US"
//       }
//     }
//   }
//   return JSON.stringify({
//     "messaging_product": "whatsapp",
//     "preview_url": false,
//     "recipient_type": "individual",
//     "to": recipient,
//     "type": "text",
//     "text": {
//       "body": text
//     }
//   });
// }
