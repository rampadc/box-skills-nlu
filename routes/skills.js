var express = require('express');
var router = express.Router();

const { FilesReader, SkillsWriter, SkillsErrorEnum } = require('../skills-kit-library/skills-kit-2.0');
// const { nlu } = require('../config');

/* GET default */
router.get('/', function(req, res, next) {
  res.status(200).send('Use POST/skills/*/invoke for Box skills');
});

router.post('/nlu/invoke', function(req, res, next) {
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
  // Write the card as metadata to the file
  writer.saveDataCards([card]).then(() => {
    console.log('Done');
    res.status(200).send({});
  }).catch(error => {
    console.error(error);
    res.status(500).send(error);
  });  
});

module.exports = router;
