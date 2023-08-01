import axios from "axios";
import net from 'net';

const server = "http://localhost";
const port = "3000";

export const postData = async (saveData: JSON, inToken: string) => {
  const url = server + ":" + port + "/save";
  console.log(url);
  const data = {
    token: inToken,
    data: saveData,
  };

  try {
    const response = await axios.post(url, data);
    //console.log('Svar från servern:', response.data);
    // Gör något med svaret från servern om så behövs
  } catch (error) {
    console.error('Fel vid anrop till servern:', error);
    // Hantera fel om sådana uppstår
  }
};

export const validate = async (inToken: string): Promise<boolean> => {
  const url = server + ":" + port + "/validate";
  console.log(url);
  const data = {
    token: inToken
  };

  try {
    const response = await axios.post(url, data);
    //console.log('Svar från servern:', response.data);
    //console.log('Responsnummer:', response.status);
    return true;
  } catch (error) {
    console.error('Fel vid anrop till servern:', error);
    return false;
  }
};

function checkPort(host: string, port: number) {
  return new Promise<boolean>((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(2000); // Timeout på 2 sekunder för anslutningen

    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });

    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });

    socket.on('error', () => {
      socket.destroy();
      resolve(false);
    });

    socket.connect(port, host);
  });
}

async function vRisingServer() {
  const host = 'http://brasse-pc.eu';

  const port27015Open = await checkPort(host, 27015);
  const port27036Open = await checkPort(host, 27036);

  console.log(`Port 27015 är ${port27015Open ? 'öppen' : 'stängd'}`);
  console.log(`Port 27036 är ${port27036Open ? 'öppen' : 'stängd'}`);
}