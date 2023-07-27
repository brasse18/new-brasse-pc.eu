import axios from "axios";

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