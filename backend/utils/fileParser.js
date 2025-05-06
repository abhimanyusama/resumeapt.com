import pdfParse from "pdf-parse/lib/pdf-parse.js";
import mammoth from "mammoth";
import path from "path";

const extractText = async (file) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".pdf") {

    const data = await pdfParse(file.buffer);
    return data;
    
  } else if (ext === ".docx") {
    const data = await mammoth.extractRawText({ buffer: file.buffer });
    return data;
  } else {
    throw new Error("Unsupported file type");
  }
};

export default extractText;
