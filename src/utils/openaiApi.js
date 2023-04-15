import axios from "axios";

const openaiApi = async (inputText) => {
  const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  const data = {
    prompt: inputText,
    max_tokens: 100, // Adjust this value based on your desired response length
    temperature: 0.7, // Adjust this value to control randomness (0 to 1)
    top_p: 1, // Controls the diversity of responses (0 to 1)
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error while fetching data from OpenAI API:", error);
    return null;
  }
};

export default openaiApi;



