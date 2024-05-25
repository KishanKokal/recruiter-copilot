import { OpenAI } from "openai";
import { MongoClient, ServerApiVersion } from "mongodb";
import { Pinecone } from "@pinecone-database/pinecone";
import { pipeline } from "@xenova/transformers";
import dotenv from "dotenv";
dotenv.config();

// OpenAI Setup
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const MODEL = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// MongoDB Setup
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
await client.connect();
export const DB = client.db("recruiter-copilot");

// PineCone Setup
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const pc = new Pinecone({
  apiKey: PINECONE_API_KEY,
});
export const index = pc.index("recruiter-copilot");

// Xenove Setup
export const pipe = await pipeline(
  "feature-extraction",
  "mixedbread-ai/mxbai-embed-large-v1"
);
