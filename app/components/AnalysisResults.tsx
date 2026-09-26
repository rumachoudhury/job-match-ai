type AnalysisResultsProps = {
  matchPercentage: number;
  matchingSkills: string[];
  missingSkills: string[];
};

export default function AnalysisResults({
  matchPercentage,
  matchingSkills,
  missingSkills,
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

      {/* Skills */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Matching Skills */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Matching Skills</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {matchingSkills.length > 0 ? (
              matchingSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No matching skills found.</p>
            )}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Missing Skills</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {missingSkills.length > 0 ? (
              missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No missing skills found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
