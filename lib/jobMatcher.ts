const skills = [
  "react",
  "next.js",
  "typescript",
  "javascript",
  "node.js",
  "express",
  "mongodb",
  "sql",
  "python",
  "git",
  "github",
  "tailwind",
  "html",
  "css",
  "api",
  "docker",
];

export function analyzeJobMatch(resume: string, jobDescription: string) {
  const resumeText = resume.toLowerCase();
  const jobText = jobDescription.toLowerCase();

  const requiredSkills = skills.filter((skill) => jobText.includes(skill));

  const matchingSkills = requiredSkills.filter((skill) =>
    resumeText.includes(skill),
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !resumeText.includes(skill),
  );

  const matchPercentage =
    requiredSkills.length > 0
      ? Math.round((matchingSkills.length / requiredSkills.length) * 100)
      : 0;

  return {
    matchPercentage,
    matchingSkills,
    missingSkills,
  };
}
