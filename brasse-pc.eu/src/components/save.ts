import axios from "axios";

const url = "http://localhost:3000/save"

export async function postData(indata: JSON) {
  try {
    const response = await axios.post(url, indata);
    console.log("Svar från servern:", response.data);
  } catch (error) {
    console.error("Det uppstod ett fel vid POST-begäran:", error);
  }
}