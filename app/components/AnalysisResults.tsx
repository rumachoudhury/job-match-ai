type AnalysisResultsProps = {
  matchPercentage: number;
  matchingSkills: string[];
  missingSkills: string[];
  suggestions: string[];
  jobLevel: string;
  resumeLevel: string;
};

export default function AnalysisResults({
  matchPercentage,
  matchingSkills,
  missingSkills,
  suggestions,
  jobLevel,
  resumeLevel,
}: AnalysisResultsProps) {
  return (
    <section className="mt-8 space-y-6">
      {/* Match Score */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-gray-500">Match Score</p>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-5xl font-bold">{matchPercentage}%</span>

          <span className="pb-2 text-gray-500">match</span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black transition-all"
            style={{ width: `${matchPercentage}%` }}
          />
        </div>
      </div>

      {/* Job Level */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Job Level</p>

          <p className="mt-2 text-2xl font-bold capitalize">{jobLevel}</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Resume Level</p>

          <p className="mt-2 text-2xl font-bold capitalize">{resumeLevel}</p>
        </div>
      </div>

      {/* Job Requirements */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Job Requirements</h2>

        <ul className="mt-4 flex flex-wrap gap-3">
          {[...matchingSkills, ...missingSkills].map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Matching Skills */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Matching Skills</h2>

          <ul className="mt-4 flex flex-wrap gap-3">
            {matchingSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800"
              >
                {skill}
              </li>
            ))}
          </ul>

          {matchingSkills.length === 0 && (
            <p className="mt-4 text-gray-500">No matching skills found.</p>
          )}
        </div>

        {/* Missing Skills */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Missing Skills</h2>

          <ul className="mt-4 flex flex-wrap gap-3">
            {missingSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800"
              >
                {skill}
              </li>
            ))}
          </ul>

          {missingSkills.length === 0 && (
            <p className="mt-4 text-gray-500">No missing skills found.</p>
          )}
        </div>
      </div>

      {/* Your Strengths */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Your Strengths</h2>

        <ul className="mt-4 flex flex-wrap gap-3">
          {matchingSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800"
            >
              {skill}
            </li>
          ))}
        </ul>

        {matchingSkills.length === 0 && (
          <p className="mt-4 text-gray-500">No strengths identified yet.</p>
        )}
      </div>

      {/* Resume Suggestions */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Resume Suggestions</h2>

        <ul className="mt-4 flex flex-col gap-3">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800"
            >
              {suggestion}
            </li>
          ))}
        </ul>

        {suggestions.length === 0 && (
          <p className="mt-4 text-gray-500">No suggestions available.</p>
        )}
      </div>
    </section>
  );
}
