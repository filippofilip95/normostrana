const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};
const fs = require('fs');

exports.handler = async function (event) {
  // console.log('event')
  // console.log(event)
  // We only care to do anything if this is our POST request.
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: "Not Allowed"
    };
  }

  // Parse the body contents into an object.
  // const data = JSON.parse(event.body);

  console.log(event.body)
  console.log(event.body)

  const file = fs.readFileSync(, 'utf-8');
  
  console.log(file)


  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status: 200,
      message: "Charge successfully created!"
    })
  };
};
