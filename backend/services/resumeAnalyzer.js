// backend/services/resumeAnalyzer.js

const skills = [
  // Programming languages
  "C",
  "C++",
  "C#",
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "PHP",
  "Go",
  "Rust",
  "Kotlin",
  "Swift",

  // Web development
  "HTML",
  "CSS",
  "React",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Express.js",
  "Angular",
  "Vue",
  "Vue.js",

  // Backend / APIs
  "REST API",
  "REST",
  "GraphQL",
  "API",
  "JWT",

  // Databases
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL",
  "Firebase",
  "Redis",

  // DevOps / Cloud
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "CI/CD",

  // Data / AI / ML
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "AI",
  "Data Science",
  "Data Analysis",
  "Pandas",
  "NumPy",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",

  // Computer science
  "Data Structures",
  "Algorithms",
  "DSA",
  "OOP",
  "Object Oriented Programming",
  "DBMS",
  "Operating Systems",
  "Computer Networks",

  // Other
  "Cybersecurity",
  "Linux",
  "Figma",
  "UI/UX"
];


// Normalize text so comparisons are easier
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s+#.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};


// Detect skills from resume text
const detectSkills = (resumeText) => {
  if (!resumeText || typeof resumeText !== "string") {
    return [];
  }

  const normalizedResume = normalizeText(resumeText);

  const detectedSkills = [];

  for (const skill of skills) {
    const normalizedSkill = normalizeText(skill);

    // Escape special regex characters
    const escapedSkill = normalizedSkill.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

    if (regex.test(normalizedResume)) {
      detectedSkills.push(skill);
    }
  }

  // Remove duplicate skills
  return [...new Set(detectedSkills)];
};


// Calculate missing skills
const calculateSkillGap = (detectedSkills, requiredSkills) => {
  if (!Array.isArray(requiredSkills)) {
    return [];
  }

  const detectedNormalized = detectedSkills.map((skill) =>
    normalizeText(skill)
  );

  return requiredSkills.filter((skill) => {
    return !detectedNormalized.includes(normalizeText(skill));
  });
};


// Calculate percentage match
const calculateMatchPercentage = (
  detectedSkills,
  requiredSkills
) => {
  if (
    !Array.isArray(requiredSkills) ||
    requiredSkills.length === 0
  ) {
    return 0;
  }

  const missingSkills = calculateSkillGap(
    detectedSkills,
    requiredSkills
  );

  const matchedSkills =
    requiredSkills.length - missingSkills.length;

  return Math.round(
    (matchedSkills / requiredSkills.length) * 100
  );
};


// Main resume analysis function
const analyzeResume = (resumeText, requiredSkills = skills) => {
  const detectedSkills = detectSkills(resumeText);

  const missingSkills = calculateSkillGap(
    detectedSkills,
    requiredSkills
  );

  const matchPercentage = calculateMatchPercentage(
    detectedSkills,
    requiredSkills
  );

  return {
    detectedSkills,
    missingSkills,
    matchPercentage,
    totalDetected: detectedSkills.length,
    totalRequired: requiredSkills.length
  };
};


export {
  skills,
  normalizeText,
  detectSkills,
  calculateSkillGap,
  calculateMatchPercentage,
  analyzeResume
};