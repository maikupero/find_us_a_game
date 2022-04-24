curl -X GET 'https://id.twitch.tv/oauth2/validate' \
-H 'Authorization: OAuth <access token to validate goes here>'

CLIENT_ID = '';
SECRET = '';

test1 = 'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=oedbd2ioqzs04nc43hvmkbyhjyy3ri&redirect_uri=http://localhost:3000&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671'

// 1. Create account, app, manage app here to get Client ID and Secret:
// https://dev.twitch.tv/console/apps/

// 2. Need to set up hourly validation for token.

// Any third-party app that calls the Twitch APIs and maintains an OAuth session must call the /validate endpoint to verify that the access token is still valid. This includes web apps, mobile apps, desktop apps, extensions, and chatbots. Your app must validate the OAuth token when it starts and on an hourly basis thereafter.

// curl -X GET 'https://id.twitch.tv/oauth2/validate' \
// -H 'Authorization: OAuth <access token to validate goes here>'

// If the token is valid, the request returns HTTP status code 200 and the response’s body contains the following JSON object:

{
  "client_id": "wbmytr93xzw8zbg0p1izqyzzc5mbiz",
  "login": "twitchdev",
  "scopes": [
    "channel:read:subscriptions"
  ],
  "user_id": "141981764",
  "expires_in": 5520838
}

// If the token is not valid, the request returns HTTP status code 401 and the response’s body contains the following JSON object:
{
  "status": 401,
  "message": "invalid access token"
}

// How to get a token?

// To get an access token, send an HTTP POST request to https://id.twitch.tv/oauth2/token. Set the following x-www-form-urlencoded parameters as appropriate for your app.

// Parameter	Required?	Type	Description
// client_id	Yes	String	Your app’s registered client ID.
// client_secret	Yes	String	Your app’s registered client secret.
// grant_type	Yes	String	Must be set to client_credentials.
// The following example shows the parameters in the body of the POST (the parameters are formatted for easier reading).

// client_id=hof5gwx0su6owfnys0yan9c87zr6t
// &client_secret=41vpdji4e9gif29md0ouet6fktd2
// &grant_type=client_credentials
// If the request succeeds, it returns an access token.

// {
//   "access_token": "jostpf5q0uzmxmkba9iyug38kjtgh",
//   "expires_in": 5011271,
//   "token_type": "bearer"
// }