import express from "express";
import fs from "fs";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { createStream } from "rotating-file-stream"; // Use named import

// Set up __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the 'log' directory exists
const logDir = path.join(__dirname, "log");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

// Create a rotating write stream (daily logs)
const logStream = createStream("access.log", {
  interval: "1d", // Rotate daily
  path: logDir,
});

const app = express();
const port = 3000;

// Use morgan to log requests
app.use(morgan("combined", { stream: logStream }));

app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
