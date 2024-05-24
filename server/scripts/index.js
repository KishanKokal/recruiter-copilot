import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const loader = new DirectoryLoader("../resumes/", {
  ".pdf": (path) => new PDFLoader(path, "/"),
  ".docx": (path) => new DocxLoader(path, "/"),
});

const docs = await loader.load("./resumes");
let characters = 0;
for (const doc of docs) {
  characters += doc.pageContent.length;
}
console.log("Length: ", characters);
