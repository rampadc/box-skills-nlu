const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: process.env.NLU_IAM_KEY,
  }),
  url: process.env.NLU_URL
});

module.exports = {
  nlu: naturalLanguageUnderstanding
};