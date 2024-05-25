import { pipe, index, DB } from "../config.js";

const collection = DB.collection("new_resumes");
const docs = await collection.find({}).toArray();
let count = 0;
for (const doc of docs) {
  let text = "";
  for (const company of doc.work_experience) {
    text += " Company: " + company.company;
    text += " Job Title: " + company.job_title;
    text += " Tech Stack: " + JSON.stringify(company.tech_stack);
    text += " Description: " + company.description;
  }
  if (doc.projects) {
    for (const project of doc.projects) {
      text += " Name: " + project.name;
      text += " Description: " + project.description;
      text += " Tech Stack: " + JSON.stringify(project.tech_stack);
    }
  }
  text += " Skills: " + JSON.stringify(doc.skills);
  let embedding = await pipe(text, {
    normalize: true,
    pooling: "mean",
  });
  embedding = embedding.tolist()[0];
  await index.upsert([
    {
      id: doc["_id"].toString(),
      values: embedding,
      metadata: {
        total_work_experience: doc.total_work_experience
          ? doc.total_work_experience
          : 0,
        country: doc.location.country ? doc.location.country : "",
        state: doc.location.state ? doc.location.state : "",
      },
    },
  ]);
  console.log(count++);
}
