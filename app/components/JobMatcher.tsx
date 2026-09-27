"use client";

import { useState } from "react";
import { analyzeJobMatch } from "@/lib/jobMatcher";
import AnalysisResults from "./AnalysisResults";

export default function JobMatcher() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [analysis, setAnalysis] = useState<{
    matchPercentage: number;
    jobRequirements: string[];
    strengths: string[];
    matchingSkills: string[];
    missingSkills: string[];
    suggestions: string[];
  } | null>(null);

  function handleAnalyze() {
    if (!resume.trim() || !jobDescription.trim()) {
      return;
    }

    const result = analyzeJobMatch(resume, jobDescription);

    setAnalysis(result);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">Job Match AI</h1>

          <p className="mt-2 text-gray-600">
            Compare your resume with a job description.
          </p>
        </div>

        {/* Input Section */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Resume */}
          <div>
            <label className="mb-2 block font-semibold">Your Resume</label>

            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume here..."
              className="h-80 w-full rounded-xl border border-gray-300 bg-white p-4 outline-none transition focus:border-black"
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="mb-2 block font-semibold">Job Description</label>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="h-80 w-full rounded-xl border border-gray-300 bg-white p-4 outline-none transition focus:border-black"
            />
          </div>
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!resume.trim() || !jobDescription.trim()}
          className="mt-6 rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Analyze My Match
        </button>

        {/* Analysis Results */}
        {analysis && (
          <AnalysisResults
            matchPercentage={analysis.matchPercentage}
            matchingSkills={analysis.matchingSkills}
            missingSkills={analysis.missingSkills}
            suggestions={analysis.suggestions}
          />
        )}
      </div>
    </main>
  );
}
