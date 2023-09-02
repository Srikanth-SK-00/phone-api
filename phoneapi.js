const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://clicksend.p.rapidapi.com/sms/send',
  headers: {
    'content-type': 'application/json',
    Authorization: '<REQUIRED>',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'b50641ace3msh10f80a16144f0bbp1bd5e8jsn998ca82e7f65',
    'X-RapidAPI-Host': 'clicksend.p.rapidapi.com'
  },
  data: {
    messages: [
      {
        source: 'mashape',
        from: 'Test',
        body: 'This is a test',
        to: '+61411111111',
        schedule: '1452244637',
        custom_string: 'this is a test'
      }
    ]
  }
};

try {
	const response =  axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}