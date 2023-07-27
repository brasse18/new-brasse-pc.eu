const express = require('express');
const cors = require('cors');
const fs = require('fs');
const validateGoogleToken = require('./validation');

// Filvägen till JSON-filen
const filePath = './server/src/admin.json';
let adminList;

const app = express();
const port = 3000;

// Asynkron funktion för att läsa JSON-filen
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    try {
      adminList = JSON.parse(data);
      //console.log(adminList);
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }
});

app.use(express.json());
app.use(cors()); // Använd cors middleware

function saveData(data) {
  const jsonObject = data;
  const jsonString = JSON.stringify(jsonObject);
  let returnCode = 0;

  try {
    fs.writeFileSync('brasse-pc.eu/src/assets/json/data.json', jsonString);
    console.log('JSON-objektet har sparats i filen data.json');
    returnCode = 200;
  } catch (err) {
    console.error('Det uppstod ett fel vid skrivning till filen:', err);
    returnCode = 500;
  }

  return returnCode;
}

function isUserAAdmin(payload) {
  let isAdmin = false;
  //console.log("kolla om du är admin");
  //console.log("Storlek: " + adminList.users.length);
  for (let index = 0; index < adminList.users.length; index++) {
    const user = adminList.users[index];
    //console.log(user);
    if (user.name === payload.name && user.email === payload.email) {
      isAdmin = true;
    }

  }
  return isAdmin;
};

app.post('/validate', async (req, res) => {
  const token = req.body.token;
  if (!token) {
    return res.status(400).json({ error: 'Ingen token tillhandahållen.', dataBody: req.body });
  }

  try {
    const payload = await validateGoogleToken(token);
    // Om valideringen lyckades kan du utföra dina handlingar här, till exempel inloggningslogik, registrering osv.
    console.log('Validering lyckades. Användarinfo:', payload);
    console.log('Validate-----------------------');

    if (isUserAAdmin(payload)) {
      console.log("Is admin: True");
      return res.status(200).json({ message: 'User is Admin' });
    } else {
      console.log("Is admin: False");
      return res.status(402).json({ message: 'User is not a Admin' });
    }
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

app.post('/save', async (req, res) => {
  const token = req.body.token;
  const data = req.body.data;
  if (!token) {
    return res.status(400).json({ error: 'Ingen token tillhandahållen.', dataBody: req.body });
  }

  try {
    const payload = await validateGoogleToken(token);
    // Om valideringen lyckades kan du utföra dina handlingar här, till exempel inloggningslogik, registrering osv.
    console.log('Validering lyckades. Användarinfo:', payload);

    if (isUserAAdmin(payload)) {
      console.log("Is admin: True");
      const returnCode = saveData(data);
      if (returnCode === 200) {
        return res.status(200).json({ message: 'Validering lyckades and saved to server' });
      } else {
        return res.status(returnCode).json({ message: 'Validering lyckades but error saveing to server' });
      }
    } else {
      console.log("Is admin: False");
      return res.status(402).json({ message: 'User is not a Admin' });
    }  
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servern är igång på port ${port}`);
});