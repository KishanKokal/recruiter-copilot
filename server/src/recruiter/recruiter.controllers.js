import {
  generateEmbedding,
  findTopCandidates,
  topCandidateDetails,
} from "./recruiter.utils.js";

export const topResumesController = async (req, res) => {
  const {
    job_description,
    min_years_of_experience,
    max_years_of_experience,
    country,
    state,
  } = req.body;
  const embedding = await generateEmbedding(job_description);
  const topCandidateIDs = await findTopCandidates(
    embedding,
    country,
    state,
    min_years_of_experience,
    max_years_of_experience
  );
  const topCandidates = await topCandidateDetails(topCandidateIDs);
  return res.json(topCandidates);
};
