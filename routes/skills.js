var express = require('express');
var router = express.Router();

const { FilesReader, SkillsWriter, SkillsErrorEnum } = require('../skills-kit-library/skills-kit-2.0');
// const { nlu } = require('../config');

/* GET default */
router.get('/', function(req, res, next) {
  res.status(200).send('Use POST/skills/*/invoke for Box skills');
});

router.post('/nlu/invoke', async function(req, res, next) {
  const event = JSON.stringify(req.body);
  const reader = new FilesReader(event);

  // just write mock metadata
  const writer = new SkillsWriter(reader.getFileContext()); 

  let data = [
    { keyword: 'Keyword 1' },
    { keyword: 'Keyword 2' },
    { keyword: 'Keyword 1' }
  ];
  let entries = [];
  data.forEach(entry => {
    entries.push({
      type: 'text',
      text: entry.keyword
    })
  });

  // Convert the entries into a Keyword Card
  const card = writer.createTopicsCard(entries);

  await writer.saveProcessingCard();

  try {
    await writer.saveDataCards([card]);
  } catch (error) {
    console.log(error.statusCode);
    console.error(error);
  } finally {
    res.status(200).send('Box Skills added.');
  }
});

module.exports = router;
