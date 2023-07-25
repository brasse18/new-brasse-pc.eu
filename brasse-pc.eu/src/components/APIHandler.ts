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
    console.log('Svar från servern:', response.data);
    // Gör något med svaret från servern om så behövs
  } catch (error) {
    console.error('Fel vid anrop till servern:', error);
    // Hantera fel om sådana uppstår
  }
};