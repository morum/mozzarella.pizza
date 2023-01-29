
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import got from "got";
import dotenv from "dotenv"
dotenv.config()

const consumer_key = process.env["CONSUMER_KEY"]
const consumer_secret = process.env["CONSUMER_SECRET"]
const oauth_token = process.env["OAUTH_TOKEN"]
const oauth_token_secret = process.env["OAUTH_TOKEN_SECRET"]

const createTweetUrl = `https://api.twitter.com/2/tweets`;

const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});

async function callApi(endpoint, body) {

  const token = {
    key: oauth_token,
    secret: oauth_token_secret
  };

  const authHeader = oauth.toHeader(oauth.authorize({
    url: endpoint,
    method: 'POST'
  }, token));

  const req = await got.post(endpoint, {
    json: body,
    responseType: 'json',
    headers: {
      Authorization: authHeader["Authorization"],
      'user-agent': "MozzarellingAutomation",
      'content-type': "application/json",
      'accept': "application/json"
    }
  });
  if (req.body) {
    return req.body;
  } else {
    throw new Error('Unsuccessful request');
  }
}

async function tweet(text){
  return callApi(createTweetUrl, {
    text
  })
}

export {
    tweet
}