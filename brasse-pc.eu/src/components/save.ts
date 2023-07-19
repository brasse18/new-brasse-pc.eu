import axios from "axios";

const server = "http://localhost";
const port = "3000";
const addres = "/save"

export async function postData(indata: JSON) {
  console.log(server + ":" + port + addres);
  try {
    const response = await axios.post(server + ":" + port + addres, indata);
    console.log("Svar från servern:", response.data);
  } catch (error) {
    console.error("Det uppstod ett fel vid POST-begäran:", error);
  }
}

export const handleSubmit = async (saveData: JSON, inToken: string) => {
  const url = server + ":" + port + "/validate";
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