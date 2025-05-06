import axios from "axios";

const callGemini = async ({ apiKey, model, resumeText, jobDescription }) => {
  const prompt = `Optimize this resume to align with the job description:

Resume:
${resumeText}

Job Description:
${jobDescription}`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      contents: [{ parts: [{ text: prompt }] }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};

export default callGemini;
