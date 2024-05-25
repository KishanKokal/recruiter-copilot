"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

let jobTypeMap = {
  IT: {
    min_years_of_experience: 0,
    max_years_of_experience: 2,
  },
  EN: {
    min_years_of_experience: 0,
    max_years_of_experience: 2,
  },
  AS: {
    min_years_of_experience: 2,
    max_years_of_experience: 5,
  },
  MS: {
    min_years_of_experience: 5,
    max_years_of_experience: 10,
  },
  DR: {
    min_years_of_experience: 10,
    max_years_of_experience: 15,
  },
  EX: {
    min_years_of_experience: 15,
    max_years_of_experience: 60,
  },
};

const TopCandidatesPage = () => {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const searchParams = useSearchParams();
  const jobDescription = searchParams.get("jobDescription");
  const jobLocation = searchParams.get("jobLocation");
  const jobType = searchParams.get("jobType");

  useEffect(() => {
    const getTopCandidates = async () => {
      setLoading(true);
      const HOST_BASE_URL = process.env.HOST_BASE_URL;
      const topCandidatesEndpoint = HOST_BASE_URL + "/recruiter/top-resumes";
      const { min_years_of_experience, max_years_of_experience } =
        jobTypeMap[jobType];
      let body = {
        job_description: jobDescription,
        min_years_of_experience: min_years_of_experience,
        max_years_of_experience: max_years_of_experience,
        country: "IN",
        state: jobLocation,
      };
      const response = await axios.post(topCandidatesEndpoint, body);
      setCardData(response.data);
      setLoading(false);
    };
    getTopCandidates();
  }, [jobDescription, jobLocation, jobType]);

  return (
    <div className="flex w-full h-full justify-center items-center gap-5">
      {loading ? (
        <div className="flex w-full h-full justify-center items-center gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm w-2/6 h-5/6 overflow-clip flex flex-col space-y-3 p-3"
            >
              <Skeleton className="h-3/6 w-full rounded-xl" />
              <div className="space-y-2 h-3/6">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        cardData.map((element) => (
          <Card key={element.id}>
            <CardHeader>
              <CardTitle>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {element.name}
                </h1>
              </CardTitle>
              <CardDescription>{`${element.location.state}, ${element.location.country}`}</CardDescription>
            </CardHeader>
            <CardContent>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center mb-4">
                {`${element.total_work_experience} years of experience`}
              </h2>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4 text-center">
                Skills
              </h2>
              <div className="flex flex-wrap w-full h-2/5 border rounded-md gap-1 p-3">
                {element.skills.map((skill, index) => (
                  <Button
                    key={index}
                    variant="destructive"
                    className="w-auto h-auto max-w-full max-h-full overflow-hidden"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-evenly">
                <Button className="w-3/6" variant="secondary">
                  See Full Profile
                </Button>
                <Button className="w-2/6">Contact</Button>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};
export default TopCandidatesPage;
