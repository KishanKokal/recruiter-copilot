"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Reccopilot
      </h1>
      <p className="text-xl text-muted-foreground mb-10 w-3/6 text-center">
        Your AI-powered recruitment copilot that streamlines the entire
        recruitment process, making it faster, smarter, and more inclusive.
      </p>
      <Link href="/find-top-candidates">
        <Button>Find Top Candidates for your Job Description</Button>
      </Link>
    </div>
  );
}
