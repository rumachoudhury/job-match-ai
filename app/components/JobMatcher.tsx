"use client";

import { useState } from "react";
import { analyzeJobMatch } from "@/lib/jobMatcher";

export default function JobMatcher() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Job Match AI</h1>

        <p className="mt-2 text-gray-600">
          Compare your resume with a job description.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">Your Resume</label>

            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume here..."
              className="h-80 w-full rounded-xl border border-gray-300 bg-white p-4 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Job Description</label>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="h-80 w-full rounded-xl border border-gray-300 bg-white p-4 outline-none focus:border-black"
            />
          </div>
        </div>

        {/* <button
          onClick={() => setResult("Ready to analyze.")}
          className="mt-6 rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
        >
          Analyze My Match
        </button> */}

        <button
          onClick={() => {
            const analysis = analyzeJobMatch(resume, jobDescription);

            setResult(`
Match Percentage: ${analysis.matchPercentage}%

Matching Skills:
${
  analysis.matchingSkills.length > 0
    ? analysis.matchingSkills.map((skill) => `• ${skill}`).join("\n")
    : "• No matching skills found"
}

Missing Skills:
${
  analysis.missingSkills.length > 0
    ? analysis.missingSkills.map((skill) => `• ${skill}`).join("\n")
    : "• No missing skills found"
}
`);
          }}
          className="mt-6 rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
        >
          Analyze My Match
        </button>

        {result && (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Analysis Results</h2>
            <p className="mt-3">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
