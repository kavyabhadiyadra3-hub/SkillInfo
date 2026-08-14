import { PDFParse } from "pdf-parse";

const extractTextFromPDF = async (buffer) => {
  if (!buffer) {
    throw new Error("PDF file buffer is missing");
  }

  let parser;

  try {
    parser = new PDFParse({
      data: buffer,
    });

    const result = await parser.getText();

    return result.text || "";
  } catch (error) {
    console.error("PDF parsing error:", error);
    throw new Error("Unable to extract text from PDF");
  } finally {
    if (parser) {
      await parser.destroy();
    }
  }
};

export default extractTextFromPDF;