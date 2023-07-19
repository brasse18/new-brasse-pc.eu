const express = require('express');
const cors = require('cors');
const fs = require('fs');
const validateGoogleToken = require('./validation');

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

app.post('/validate', async (req, res) => {
  const token = req.body.token;
  const data = req.body.data;

  console.log("data: " + JSON.stringify(data));
  console.log("token: " + token);
  console.log(req.body);
  if (!token) {
    return res.status(400).json({ error: 'Ingen token tillhandahållen.', dataBody: req.body});
  }

  try {
    const payload = await validateGoogleToken(token);
    // Om valideringen lyckades kan du utföra dina handlingar här, till exempel inloggningslogik, registrering osv.
    console.log('Validering lyckades. Användarinfo:', payload);
    return res.status(200).json({ message: 'Validering lyckades.' });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servern är igång på port ${port}`);
});