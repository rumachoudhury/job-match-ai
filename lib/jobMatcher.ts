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

const jobLevels = [
  "entry-level",
  "junior",
  "mid-level",
  "mid level",
  "senior",
  "lead",
  "principal",
];

export function analyzeJobMatch(resume: string, jobDescription: string) {
  const resumeText = resume.toLowerCase();
  const jobText = jobDescription.toLowerCase();

  // Find skills mentioned in the job description
  const requiredSkills = skills.filter((skill) => jobText.includes(skill));

  // Find skills that appear in both the resume and job description
  const matchingSkills = requiredSkills.filter((skill) =>
    resumeText.includes(skill),
  );

  // Find skills mentioned in the job but missing from the resume
  const missingSkills = requiredSkills.filter(
    (skill) => !resumeText.includes(skill),
  );

  // Calculate skill match percentage
  const matchPercentage =
    requiredSkills.length > 0
      ? Math.round((matchingSkills.length / requiredSkills.length) * 100)
      : 0;

  // Create resume suggestions for missing skills
  const suggestions = missingSkills.map(
    (skill) =>
      `Consider highlighting your ${skill} experience if you have relevant experience.`,
  );

  // Find job level
  const jobLevel =
    jobLevels.find((level) => jobText.includes(level)) || "Not specified";

  // Check whether the resume mentions the same job level
  const resumeLevel =
    jobLevels.find((level) => resumeText.includes(level)) || "Not specified";

  // Separate strengths from requirements
  const strengths = matchingSkills;

  const jobRequirements = requiredSkills;

  return {
    matchPercentage,
    jobRequirements,
    strengths,
    matchingSkills,
    missingSkills,
    suggestions,
    jobLevel,
    resumeLevel,
  };
}
