const callClaude = async ({ apiKey, model, resumeText, jobDescription }) => {
  const prompt = `Please rewrite the following resume to better match the job description:

Resume:
${resumeText}

Job Description:
${jobDescription}`;

  const response = await axios.post(
    "https://api.anthropic.com/v1/messages",
    {
      model,
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
    }
  );

  return response.data.content[0].text;
};

export default callClaude;
