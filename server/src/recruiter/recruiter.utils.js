import { pipe, index, DB } from "../../config.js";
import { ObjectId } from "mongodb";

export const generateEmbedding = async (job_description) => {
  let embedding = await pipe(job_description, {
    normalize: true,
    pooling: "mean",
  });
  embedding = embedding.tolist()[0];
  return embedding;
};

export const findTopCandidates = async (
  embedding,
  country,
  state,
  min_years_of_experience,
  max_years_of_experience
) => {
  const topCandidates = await index.query({
    topK: 3,
    vector: embedding,
    includeValues: false,
    includeMetadata: true,
    filter: {
      $and: [
        { country: { $eq: country ? country : "IN" } },
        { state: { $eq: state } },
        { total_work_experience: { $gte: min_years_of_experience } },
        { total_work_experience: { $lte: max_years_of_experience } },
      ],
    },
  });
  const top_candidates_ids = topCandidates.matches.map(
    (candidate) => new ObjectId(candidate.id)
  );
  return top_candidates_ids;
};

export const topCandidateDetails = async (top_candidates_ids) => {
  const collection = DB.collection("new_resumes");
  const top_candidates = collection
    .find({ _id: { $in: top_candidates_ids } })
    .toArray();
  return top_candidates;
};
