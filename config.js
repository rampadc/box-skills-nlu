const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: process.env.NLU_IAM_KEY,
  }),
  url: process.env.NLU_URL
});

// const nluAnalyzeParams = {
//   'features': {
//     'entities': {
//       'emotion': true,
//       'sentiment': true,
//       'limit': 2,
//     },
//     'keywords': {
//       'emotion': true,
//       'sentiment': true,
//       'limit': 2,
//     }
//   }
// }

module.exports = {
  nlu: naturalLanguageUnderstanding
};