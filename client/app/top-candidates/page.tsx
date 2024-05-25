"use client";
import { useSearchParams } from "next/navigation";

const TopCandidatesPage = () => {
  const searchParams = useSearchParams();
  const jobDescription = searchParams.get("jobDescription");
  const jobLocation = searchParams.get("jobLocation");
  const jobType = searchParams.get("jobType");

  return (
    <div>
      <h1>{jobLocation}</h1>
      <h1>{jobType}</h1>
      <h1>{decodeURIComponent(jobDescription)}</h1>
    </div>
  );
};

export default TopCandidatesPage;
