import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { cleanText, parseResume, storeParesedResume } from "./utils.js";

const loader = new DirectoryLoader("./resumes/", {
  ".pdf": (path) => new PDFLoader(path, { splitPages: false }),
  ".docx": (path) => new DocxLoader(path, { splitPages: false }),
});

const docs = await loader.load("./resumes");

let count = 0;
for (const doc of docs) {
  let cleanedResumeText = cleanText(doc.pageContent);
  let parsedResume = await parseResume(cleanedResumeText);
  console.log(parsedResume);
  await storeParesedResume(parsedResume);
  console.log(count++);
}
