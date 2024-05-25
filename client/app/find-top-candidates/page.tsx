"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import React from "react";

const TopCandidatesForm = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (submitButtonEnabled) {
      const query = {
        jobDescription: encodeURIComponent(jobDescription),
        jobLocation,
        jobType,
      };
      const queryString = new URLSearchParams(query).toString();
      router.push(`/top-candidates?${queryString}`);
    }
  };

  useEffect(() => {
    if (jobDescription !== "" && jobLocation !== "" && jobType !== "") {
      setSubmitButtonEnabled(true);
    } else {
      setSubmitButtonEnabled(false);
    }
  }, [jobDescription, jobLocation, jobType]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Find Top Candidates
      </h1>
      <p className="text-xl text-muted-foreground mb-10 w-3/6 text-center">
        Enter the following details
      </p>
      <div className="flex flex-col w-4/6 border rounded-md overflow-x-hidden p-5 gap-1.5 justify-center">
        <div className="flex flex-col w-100 border rounded-md p-5 gap-2">
          <h1>Job Description *</h1>
          <Textarea
            placeholder="Paste the job description here"
            value={jobDescription}
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col w-100 border rounded-md p-5 gap-2">
          <h1>Job Location *</h1>
          <Select
            onValueChange={(value) => {
              setJobLocation(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Job Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>States</SelectLabel>
                <SelectItem value="AN">Andaman and Nicobar Islands</SelectItem>
                <SelectItem value="AP">Andhra Pradesh </SelectItem>
                <SelectItem value="AR">Arunāchal Pradesh </SelectItem>
                <SelectItem value="AS">Assam </SelectItem>
                <SelectItem value="CH">Chandīgarh</SelectItem>
                <SelectItem value="CG">Chhattīsgarh</SelectItem>
                <SelectItem value="DL">Delhi</SelectItem>
                <SelectItem value="DH">
                  Dādra and Nagar Haveli and Damān and Diu
                </SelectItem>
                <SelectItem value="HP">Himāchal Pradesh</SelectItem>
                <SelectItem value="JK">Jammu and Kashmir</SelectItem>
                <SelectItem value="JH">Jhārkhand</SelectItem>
                <SelectItem value="KA">Karnātaka</SelectItem>
                <SelectItem value="KL">Kerala</SelectItem>
                <SelectItem value="LA">Ladākh</SelectItem>
                <SelectItem value="MP">Madhya Pradesh </SelectItem>
                <SelectItem value="MH">Mahārāshtra</SelectItem>
                <SelectItem value="MN">Manipur</SelectItem>
                <SelectItem value="ML">Meghālaya</SelectItem>
                <SelectItem value="MZ">Mizoram</SelectItem>
                <SelectItem value="NL">Nāgāland</SelectItem>
                <SelectItem value="OD">Odisha</SelectItem>
                <SelectItem value="PY">Puducherry</SelectItem>
                <SelectItem value="PB">Punjab</SelectItem>
                <SelectItem value="RJ">Rājasthān</SelectItem>
                <SelectItem value="TN">Tamil Nādu</SelectItem>
                <SelectItem value="TS">Telangāna</SelectItem>
                <SelectItem value="TR">Tripura</SelectItem>
                <SelectItem value="UP">Uttar Pradesh</SelectItem>
                <SelectItem value="UK">Uttarākhand</SelectItem>
                <SelectItem value="WB">West Bengal </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-100 border rounded-md p-5 gap-2">
          <h1>Job type *</h1>
          <Select
            onValueChange={(value) => {
              setJobType(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Job type</SelectLabel>
                <SelectItem value="IT">
                  Internship (0+ Years of Experience)
                </SelectItem>
                <SelectItem value="EN">
                  Entry Level (0+ Years of Experience)
                </SelectItem>
                <SelectItem value="AS">
                  Associate (2+ Years of Experience)
                </SelectItem>
                <SelectItem value="MS">
                  Mid-Senior Level (5+ Years of Experience)
                </SelectItem>
                <SelectItem value="DR">
                  Director (10+ Years of Experience)
                </SelectItem>
                <SelectItem value="EX">
                  Executive (15+ Years of Experience)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-100 p-5 gap-2">
          <Button disabled={!submitButtonEnabled} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopCandidatesForm;
