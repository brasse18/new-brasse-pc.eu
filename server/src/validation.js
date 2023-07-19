const { OAuth2Client } = require('google-auth-library');

const clientId = '194260544508-unnerf7v4t9p74h160p4lmqb9r04df3s.apps.googleusercontent.com'; // Byt ut detta med ditt riktiga Google Client ID
const client = new OAuth2Client(clientId);

async function validateGoogleToken(idToken) {
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: clientId,
    });

    const payload = ticket.getPayload();
    // Här kan du använda informationen i payload för att verifiera användaren eller utföra ytterligare åtgärder.
    // Till exempel kan du kontrollera att payload.sub (Google-användar-ID) är unikt i din databas,
    // och att användaren är giltig att logga in.

    return payload;
  } catch (error) {
    console.error('Validering misslyckades:', error.message);
    throw new Error('Ogiltig token');
  }
}

module.exports = validateGoogleToken;