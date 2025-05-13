import extractText from '../utils/fileParser.js';
import callClaude from '../llms/claude.js';
import callOpenAi from '../llms/openai.js';
import callGemini from '../llms/gemeni.js';


const llmMap = {
  claude: callClaude,
  openai: callOpenAi,
  gemini: callGemini
};

export const handleResumeUpload = async (req, res) => {
  try{

        const file = req.file;
        const {jobDescription, apiKey, llmMapService, model} = req.body;

        if(!file)
        {
          return res.status(400).json({message:"no file upload"});
        }
        if (!jobDescription || !apiKey || !llmMapService || !model) {
          return res.status(400).json({ message: "Missing fileds required" });
        }
        const text = await extractText(file);
        // console.log("here", text);
        const callLLM = llmMap[llmMapService.toLowerCase()];

        if (!callLLM) {
          return res.status(400).json({ message: "Unsupported Service" });
        }
        const result = await callLLM({
          apiKey,
          model,
          text,
          jobDescription,
        });

        res.status(200).json({ message: "File Uploaded successfully" });

        console.log("result", result);
        // console.log("extracted text is", text);
        // console.log("given Job Description", jobDescription);

  }
  catch(error){
          console.error(
            "uploadController, handleResumeUpload function error:",
            error.stack || error
          );
        res.status(500).json({message:"internal server error"});
  }
}  