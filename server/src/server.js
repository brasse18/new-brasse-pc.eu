const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Använd cors middleware

app.post('/save', (req, res) => {
  const jsonObject = req.body;
  const jsonString = JSON.stringify(jsonObject);

  fs.writeFile('brasse-pc.eu/src/assets/json/data.json', jsonString, (err) => {
    console.log(jsonString);
    if (err) {
      console.error('Det uppstod ett fel vid skrivning till filen:', err);
      res.sendStatus(500);
    } else {
      console.log('JSON-objektet har sparats i filen data.json');
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Servern är igång på port ${port}`);
});