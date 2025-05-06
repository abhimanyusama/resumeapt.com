# ResumeAPT.com

## Project Overview

This project demonstrates a simple API implementation for document processing. The key functionality includes uploading a document using `multer` middleware, extracting its text content, and logging the extracted text to the console. The document is uploaded into memory and is not saved to any storage.

## Features

- **Document Upload**: Utilizes `multer` middleware to handle file uploads directly into memory.
- **Text Extraction**: Processes the uploaded document to extract its text content.
- **Console Output**: Logs the extracted text to the console for further use or debugging.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the API.
- **Multer**: Middleware for handling `multipart/form-data` for file uploads.

## How It Works
1. A resume file and job description are uploaded via the `/api/upload` API endpoint.
2. The file is processed in memory using `multer` without being saved to disk.
3. Resume text is extracted from `.pdf` or `.docx` formats.
4. The extracted text and job description are logged for debugging purposes.
5. The user provides the following additional inputs:
    - `llmService` (e.g., OpenAI, Hugging Face, Gemini)
    - `model name` (e.g., `gpt-3.5-turbo`, `tiiuae/falcon-7b-instruct`)
    - `apiKey` for the selected LLM service.
6. Based on the chosen service, the backend dynamically routes the request to the appropriate LLM API.
7. The LLM processes the inputs and returns an optimized version of the resume tailored to the job description.
8. The API responds with the optimized resume content.

## Prerequisites

- Node.js installed on your system.
- Basic understanding of JavaScript and RESTful APIs.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-repo/resumeapt.com.git
    ```
2. Navigate to the project directory:
    ```
    cd resumeapt.com
    ```
3. Install dependencies:
    ```
    npm install
    ```

## Usage

1. Start the server:
    ```
    npm start
    ```
2. Use a tool like Postman or cURL to upload a document to the API endpoint.
3. Check the console for the extracted text.

## Future Enhancements

- Save the extracted text to a database.
- Add support for multiple document formats.
- Implement a front-end interface for easier interaction.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or feedback, please reach out to [your-email@example.com].