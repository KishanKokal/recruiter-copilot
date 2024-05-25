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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
              <div className="flex flex-wrap w-full h-2/5 border rounded-md gap-1 p-3 max-h-96 overflow-y-clip">
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-3/6" variant="secondary">
                      See Full Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-5">
                          {element.name}
                        </h1>
                      </DialogTitle>
                      <DialogDescription className="max-h-96 overflow-x-scroll text-justify">
                        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
                          Contact Details
                        </h2>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                          {`Phone: ${
                            element.contact.phone
                              ? element.contact.phone
                              : "N.A."
                          }`}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                          {`Email: ${
                            element.contact.email
                              ? element.contact.email
                              : "N.A."
                          }`}
                        </p>
                        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
                          Work Experience
                        </h2>
                        {element.work_experience &&
                        element.work_experience.length > 0 ? (
                          element.work_experience.map((work_ex, index) => (
                            <div key={index}>
                              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-center">
                                {`${work_ex.job_title} @ ${work_ex.company}`}
                              </h3>
                              <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                                {work_ex.start_date.month &&
                                work_ex.start_date.year &&
                                work_ex.end_date.month &&
                                work_ex.end_date.year
                                  ? `${work_ex.start_date.month}, ${work_ex.start_date.year} - ${work_ex.end_date.month}, ${work_ex.end_date.year}`
                                  : "Dates not available"}
                              </p>
                              <p className="leading-7 [&:not(:first-child)]:mt-6">
                                {`${work_ex.description}`}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div>No work experience available</div>
                        )}
                        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
                          Education
                        </h2>
                        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-center">
                          {`${element.education.institution}`}
                        </h3>
                        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-center">
                          {`${element.education.degree} in ${element.education.field}`}
                        </h3>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                          {element.education.start_date.month &&
                          element.education.start_date.year &&
                          element.education.end_date.month &&
                          element.education.end_date.year
                            ? `${element.education.start_date.month}, ${element.education.start_date.year} - ${element.education.end_date.month}, ${element.education.end_date.year}`
                            : "Dates not available"}
                        </p>
                        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
                          Skills
                        </h2>
                        <div className="flex flex-wrap w-full border rounded-md gap-1 p-3">
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
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-2/6">Contact</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Contact</DialogTitle>
                      <DialogDescription>
                        You can contact via email
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <Input
                          id="link"
                          defaultValue={element.contact.email}
                          readOnly
                        />
                      </div>
                      <Button type="submit" size="sm" className="px-3">
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};
export default TopCandidatesPage;
