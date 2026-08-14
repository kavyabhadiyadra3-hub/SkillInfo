import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "SkillInfo backend is working!",
    });
});

app.post("/api/resume/analyze", (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                error: "Resume text is required",
            });
        }

        console.log("Resume received by backend.");
        console.log("Text length:", text.length);

        res.json({
            success: true,
            message: "Resume received successfully",
            textLength: text.length,
        });

    } catch (error) {
        console.error("Resume analysis error:", error);

        res.status(500).json({
            error: "Resume analysis failed",
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`SkillInfo backend running on port ${PORT}`);
});