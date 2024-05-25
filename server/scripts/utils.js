import { MODEL, DB } from "../config.js";
import {
  SYSTEM_MESSAGE,
  SAMPLE_SYSTEM_RESPONSE_TO_JSON_FORMAT,
  SAMPLE_SYSTEM_RESPONSE,
  SAMPLE_USER_MESSAGE,
} from "./prompts.js";

export const cleanText = (text) => {
  return text.replace(/\s+/g, " ").replace(/\n+/g, "\n").trim();
};

export const parseResume = async (text) => {
  const response = await MODEL.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_MESSAGE,
      },
      {
        role: "user",
        content: text,
      },
      {
        role: "assistant",
        content: SAMPLE_SYSTEM_RESPONSE_TO_JSON_FORMAT,
      },
      {
        role: "user",
        content: SAMPLE_USER_MESSAGE,
      },
      {
        role: "assistant",
        content: SAMPLE_SYSTEM_RESPONSE,
      },
      {
        role: "user",
        content: text,
      },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });
  let parsedResume = JSON.parse(response.choices[0].message.content);
  parsedResume.tokens_usage = response.usage;
  return parsedResume;
};

export const storeParesedResume = async (resume) => {
  const collection = DB.collection("new_resumes");
  await collection.insertOne(resume);
};
