// https://api-docs.igdb.com/#requests
// https://api-docs.igdb.com/#examples
// https://github.com/twitchdev/authentication-node-sample/blob/main/index.js
// https://linuxize.com/post/curl-post-request/
// Basically - get a token via post request using ID and SECRET, use token to access API.


// To get an access token, send an HTTP POST request to https://id.twitch.tv/oauth2/token. Set the following x-www-form-urlencoded parameters as appropriate for your app.
// Parameter	   Required?	Type	  Description
// client_id	   Yes	      String	Your app’s registered client ID.
// client_secret Yes	      String	Your app’s registered client secret.
// grant_type	   Yes	      String	Must be set to client_credentials.

// https://id.twitch.tv/oauth2/token
// client_id=Client ID
// client_secret=Client Secret
// grant_type=client_credentials
// curl -X POST -d 'client_id=oedbd2ioqzs04nc43hvmkbyhjyy3ri&client_secret=317bxdcqah8e1ixzmiwcxg54wfkg00&grant_type=client_credentials' https://id.twitch.tv/oauth2/token

// If the request succeeds, it returns an access token like:
// {
//   "access_token": "jostpf5q0uzmxmkba9iyug38kjtgh",
//   "expires_in": 5011271,
//   "token_type": "bearer"
// }

// Get ClientID & Secret stored as config vars server-side.
CLIENT_ID = process.env.CLIENT_ID;
SECRET = process.env.SECRET;

// HTTP POST to get access token
token_post = `
curl -X POST 
-d 'client_id=${CLIENT_ID}'
-d 'client_secret=${SECRET}'
-d 'grant_type=client_credentials' 
https://id.twitch.tv/oauth2/token
`

TOKEN = token_post.access_token;

BASE_URL = 'https://api.igdb.com/v4'
ENDPOINT = 'games'

api_post = `
curl -X POST 
Client-ID: ${CLIENT_ID}
Authorization: Bearer ${TOKEN}
https://example.com/contact.php
`



// 1. Create account, app, manage app here to get Client ID and Secret:
// https://dev.twitch.tv/console/apps/

// 2. Need to set up hourly validation for token.
// Any third-party app that calls the Twitch APIs and maintains an OAuth session must call the /validate endpoint 
// to verify that the access token is still valid. This includes web apps, mobile apps, desktop apps, extensions, and chatbots. 
// Your app must validate the OAuth token when it starts and on an hourly basis thereafter.
