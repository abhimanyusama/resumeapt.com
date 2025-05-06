import axios from "axios";

const callOpenAi = async ({ apiKey, model, resumeText, jobDescription }) => {
  const prompt = `Optimize the following resume to match the job description:

Resume:
${resumeText}

Job Description:
${jobDescription}`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model,
      messages: [
        {
          role: "system",
          content: "You are a helpful resume optimization assistant.",
        },
        { role: "user", content: prompt },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};

export default callOpenAi;
