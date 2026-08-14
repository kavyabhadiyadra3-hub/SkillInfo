import skills from "../data/skills";
import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
function Resume({ onExploreSkill }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [resumeText, setResumeText] = useState("");
    const [resumeSections, setResumeSections] = useState(null);
    const [resumeAnalysis, setResumeAnalysis] = useState(null);
    const [detectedSkills, setDetectedSkills] = useState([]);
    const [skillGap, setSkillGap] = useState([]);

    // Parse extracted resume text into different sections
    const parseResumeText = (text) => {
        const sections = {
            personal: "",
            education: "",
            skills: "",
            experience: "",
            projects: "",
            certifications: "",
        };

        const lines = text
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

        let currentSection = "personal";

        const sectionNames = {
            education: [
                "education",
                "academic background",
                "qualification",
                "educational background",
            ],
            skills: [
                "skills",
                "technical skills",
                "technical knowledge",
                "skills & technologies",
            ],
            experience: [
                "experience",
                "work experience",
                "employment",
                "professional experience",
            ],
            projects: [
                "projects",
                "project",
                "personal projects",
                "academic projects",
            ],
            certifications: [
                "certifications",
                "certificates",
                "certification",
            ],
        };

        lines.forEach((line) => {
            const normalizedLine = line
                .toLowerCase()
                .replace(/[:\-]/g, "")
                .trim();

            let foundSection = null;

            Object.entries(sectionNames).forEach(([section, names]) => {
                if (names.includes(normalizedLine)) {
                    foundSection = section;
                }
            });

            if (foundSection) {
                currentSection = foundSection;
            } else {
                sections[currentSection] += line + "\n";
            }
        });

        return sections;
    };

    // Analyze resume sections
    const analyzeResume = (sections) => {
    const sectionWeights = {
        personal: 15,
        education: 15,
        skills: 25,
        experience: 20,
        projects: 20,
        certifications: 5,
    };

    const checks = {
        personal: Boolean(sections.personal.trim()),
        education: Boolean(sections.education.trim()),
        skills: Boolean(sections.skills.trim()),
        experience: Boolean(sections.experience.trim()),
        projects: Boolean(sections.projects.trim()),
        certifications: Boolean(sections.certifications.trim()),
    };

    const score = Object.entries(checks).reduce(
        (total, [section, exists]) => {
            return exists
                ? total + sectionWeights[section]
                : total;
        },
        0
    );

    const missingSections = Object.entries(checks)
        .filter(([section, exists]) => !exists)
        .map(([section]) => section);

    return {
        score,
        checks,
        missingSections,
    };
};

    const normalizeSkill = (skill) => {
        return skill
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ");
    };

    const detectSkills = (text) => {
    const availableSkills = [
        "C",
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "SQL",
        "Git",
        "GitHub",
        "Data Structures",
        "Algorithms",
        "Machine Learning",
        "Artificial Intelligence",
        "Cybersecurity",
    ];

    const normalizedText = text.toLowerCase();

    return availableSkills.filter((skill) => {
        const normalizedSkill = skill.toLowerCase();

        const escapedSkill = normalizedSkill.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

        const pattern = new RegExp(
            `(^|\\W)${escapedSkill}(\\W|$)`,
            "i"
        );

        return pattern.test(normalizedText);
    });
};
  const calculateSkillGap = (detected) => {
    const detectedNormalized = detected.map((skill) =>
        normalizeSkill(skill)
    );

    const learningPaths = [
        {
            required: ["html", "css", "javascript"],
            next: ["react", "node.js"],
        },
        {
            required: ["python"],
            next: ["data structures", "machine learning"],
        },
        {
            required: ["c++"],
            next: ["data structures", "algorithms"],
        },
        {
            required: ["java"],
            next: ["data structures", "algorithms"],
        },
        {
            required: ["javascript"],
            next: ["react", "node.js"],
        },
        {
            required: ["git"],
            next: ["github"],
        },
        {
            required: ["machine learning"],
            next: ["artificial intelligence"],
        },
    ];

    const recommended = [];

    learningPaths.forEach((path) => {
        const hasRequiredSkills = path.required.some((requiredSkill) =>
            detectedNormalized.includes(normalizeSkill(requiredSkill))
        );

        if (hasRequiredSkills) {
            path.next.forEach((nextSkill) => {
                const alreadyDetected = detectedNormalized.includes(
                    normalizeSkill(nextSkill)
                );

                if (!alreadyDetected && !recommended.includes(nextSkill)) {
                    recommended.push(nextSkill);
                }
            });
        }
    });

    // Add other missing SkillInfo skills if fewer than 5
    skills.forEach((skill) => {
        const skillName = normalizeSkill(skill.title);

        if (
            !detectedNormalized.includes(skillName) &&
            !recommended.includes(skillName) &&
            recommended.length < 5
        ) {
            recommended.push(skillName);
        }
    });

    return recommended
        .slice(0, 5)
        .map((skillName) => {
            const matchedSkill = skills.find(
                (skill) =>
                    normalizeSkill(skill.title) ===
                    normalizeSkill(skillName)
            );

            return matchedSkill ? matchedSkill.title : skillName;
        });
};

const getResumeScoreMessage = (score) => {
    if (score >= 80) {
        return {
            title: "Excellent Resume Structure! 🎉",
            message:
                "Your resume contains most of the important sections. Keep improving your skills and experience.",
        };
    }

    if (score >= 60) {
        return {
            title: "Good Resume Structure 👍",
            message:
                "Your resume has a good foundation, but a few sections can still be improved.",
        };
    }

    if (score >= 40) {
        return {
            title: "Your Resume Needs Improvement ⚠️",
            message:
                "Several important sections are missing. Add them to make your resume more complete.",
        };
    }

    return {
        title: "Your Resume Needs More Work 🚨",
        message:
            "Several important sections are missing. Start by adding education, skills, projects, and experience.",
    };
};

    // Handle resume upload
    const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    setSelectedFile(file);

    if (file.type !== "application/pdf") {
        alert("For now, please upload a PDF resume.");
        return;
    }

    try {
        const arrayBuffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({
            data: arrayBuffer,
        }).promise;

        let extractedText = "";

        for (
            let pageNumber = 1;
            pageNumber <= pdf.numPages;
            pageNumber++
        ) {
            const page = await pdf.getPage(pageNumber);

            const textContent = await page.getTextContent();

            const pageText = textContent.items
                .map((item) => item.str)
                .join(" ");

            extractedText += pageText + "\n";
        }

        // Save extracted text
        setResumeText(extractedText);

        console.log("PDF TEXT EXTRACTED:");
        console.log(extractedText);

        // Send text to backend
        const response = await fetch(
            "https://skillinfo.onrender.com/api/resume/analyze",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: extractedText,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Backend resume analysis failed");
        }

        // Get backend response
        const result = await response.json();

        console.log("BACKEND RESULT:");
        console.log(result);

        // Local analysis for now
        const parsedSections = parseResumeText(extractedText);

        setResumeSections(parsedSections);

        const analysis = analyzeResume(parsedSections);

        setResumeAnalysis(analysis);

        const skillsFound = detectSkills(extractedText);

        setDetectedSkills(skillsFound);

        const missingSkills = calculateSkillGap(skillsFound);

        setSkillGap(missingSkills);

    } catch (error) {
        console.error("Error reading resume:", error);
        alert("Could not read this PDF.");
    }
};

    return (
        <section className="resume-section">

            {/* Header */}
            <div className="resume-header">
                <p className="tagline">RESUME ANALYZER</p>

                <h1>
                    Upload Your <span>Resume</span>
                </h1>

                <p>
                    Upload your existing resume and get a clean
                    preview with useful insights.
                </p>
            </div>

            {/* Upload Card */}
            <div className="resume-upload-card">
                <div className="upload-icon">📄</div>

                <h2>Upload your resume</h2>

                <p>
                    Upload your existing PDF or DOCX resume.
                </p>

                <input
    type="file"
    accept=".pdf"
    onChange={handleFileChange}
/>

                <p className="upload-note">
    Supported format: PDF (maximum 5 MB)
</p>

                {selectedFile && (
                    <p className="selected-file">
                        Selected file: {selectedFile.name}
                    </p>
                )}
            </div>

            {/* Resume Preview */}
            {resumeSections && (
                <div className="resume-preview-section">

                    <h2>Resume Preview</h2>

                    <div className="resume-paper">

                        {/* Personal Information */}
                        <header className="resume-header-preview">
                            <p>
                                {resumeSections.personal ||
                                    "No personal information detected."}
                            </p>
                        </header>

                        {/* Education */}
                        <section className="resume-preview-block">
                            <h3>Education</h3>

                            <div>
                                {resumeSections.education ||
                                    "No education section detected."}
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="resume-preview-block">
                            <h3>Skills</h3>

                            <div>
                                {resumeSections.skills ||
                                    "No skills section detected."}
                            </div>
                        </section>

                        {/* Experience */}
                        <section className="resume-preview-block">
                            <h3>Experience</h3>

                            <div>
                                {resumeSections.experience ||
                                    "No experience section detected."}
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="resume-preview-block">
                            <h3>Projects</h3>

                            <div>
                                {resumeSections.projects ||
                                    "No projects section detected."}
                            </div>
                        </section>

                        {/* Certifications */}
                        <section className="resume-preview-block">
                            <h3>Certifications</h3>

                            <div>
                                {resumeSections.certifications ||
                                    "No certifications section detected."}
                            </div>
                        </section>

                    </div>
                </div>
            )}

            {/* Resume Analysis */}
            {/* Resume Summary Dashboard */}
{resumeAnalysis && (
  <div className="resume-dashboard">

    <div className="dashboard-card">
      <span className="dashboard-number">
        {resumeAnalysis.score}%
      </span>
      <p>Completeness</p>
      <div className="resume-progress-bar">
    <div
        className="resume-progress-fill"
        style={{
            width: `${resumeAnalysis.score}%`,
        }}
    ></div>
</div>
    </div>

    <div className="dashboard-card">
      <span className="dashboard-number">
        {
          Object.values(resumeAnalysis.checks)
            .filter(Boolean)
            .length
        }
      </span>
      <p>Sections Found</p>
    </div>

    <div className="dashboard-card">
      <span className="dashboard-number">
        {detectedSkills.length}
      </span>
      <p>Skills Detected</p>
    </div>

    <div className="dashboard-card">
      <span className="dashboard-number">
        {skillGap.length}
      </span>
      <p>Skills To Learn</p>
    </div>
    <div className="resume-score-message">

    <h3>
        {getResumeScoreMessage(resumeAnalysis.score).title}
    </h3>

    <p>
        {getResumeScoreMessage(resumeAnalysis.score).message}
    </p>

</div>

  </div>
  
)}

{/* Missing Resume Sections */}
{resumeAnalysis &&
  resumeAnalysis.missingSections.length > 0 && (
    <div className="missing-sections">

      <h2>⚠️ Sections You Can Improve</h2>

      <p>
        Your resume is missing some important sections.
        Adding these sections can make your resume more complete.
      </p>

      <div className="missing-section-list">

        {resumeAnalysis.missingSections.map((section) => (
          <div
            key={section}
            className="missing-section-item"
          >
            <span>
              {section.charAt(0).toUpperCase() +
                section.slice(1)}
            </span>
          </div>
        ))}

      </div>

    </div>
  )}

  {/* Resume Action Plan */}
{resumeAnalysis && (
    <div className="resume-action-plan">

        <h2>🚀 Your Next Steps</h2>

        <p>
            Use this analysis to improve your resume and
            continue building your skills.
        </p>

        <div className="action-plan-list">

            {resumeAnalysis.missingSections.length > 0 && (
                <div className="action-plan-item">
                    <span>1</span>

                    <div>
                        <h3>Add Missing Sections</h3>

                        <p>
                            Add your{" "}
                            {resumeAnalysis.missingSections
                                .map(
                                    (section) =>
                                        section.charAt(0).toUpperCase() +
                                        section.slice(1)
                                )
                                .join(", ")}
                            {" "}section{resumeAnalysis.missingSections.length > 1 ? "s" : ""}.
                        </p>
                    </div>
                </div>
            )}

            {detectedSkills.length === 0 && (
                <div className="action-plan-item">
                    <span>2</span>

                    <div>
                        <h3>Add Your Technical Skills</h3>

                        <p>
                            Make sure your resume clearly lists
                            the programming languages, tools,
                            and technologies you know.
                        </p>
                    </div>
                </div>
            )}

            {skillGap.length > 0 && (
                <div className="action-plan-item">
                    <span>3</span>

                    <div>
                        <h3>Build Your Skill Gap</h3>

                        <p>
                            Explore the recommended SkillInfo
                            courses and start learning your
                            next skills.
                        </p>
                    </div>
                </div>
            )}

            <div className="action-plan-item">
                <span>4</span>

                <div>
                    <h3>Keep Improving</h3>

                    <p>
                        Add projects, certifications, and
                        practical experience as you progress.
                    </p>
                </div>
            </div>

        </div>

    </div>
)}

            {detectedSkills.length > 0 && (
    <div className="detected-skills">

        <h2>Skills Detected From Your Resume</h2>

        <div className="skill-tags">
            {detectedSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                    {skill}
                </span>
            ))}
        </div>

    </div>
)}

{/* Recommended Skills */}
{skillGap.length > 0 && (
    <div className="skill-gap">

        <h2>🎯 Your Skill Gap</h2>

        <p>
    Based on the skills detected in your resume,
    these are the next skills recommended for your learning path.
</p>

        <div className="skill-gap-list">

            {skillGap.map((skillTitle) => {

                const matchedSkill = skills.find(
                    (skill) =>
                        normalizeSkill(skill.title) ===
                        normalizeSkill(skillTitle)
                );

                return (
                    <div
                        key={skillTitle}
                        className="skill-gap-item"
                    >

                        <div className="skill-gap-info">

                            <h3>{skillTitle}</h3>

                            {matchedSkill?.description && (
                                <p>
                                    {matchedSkill.description}
                                </p>
                            )}

                        </div>

                        <button
    type="button"
    onClick={() => onExploreSkill(skillTitle)}
>
    Explore Course →
</button>
                        

                    </div>
                );
            })}

        </div>

    </div>
)}

</section>
    );
}

export default Resume;