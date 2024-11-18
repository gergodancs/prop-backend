import * as path from "node:path";
import * as fs from "node:fs";
import multer = require("multer");

const UPLOADS_DIR = path.join(__dirname, '../uploads');

// Ensure upload directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save with a timestamp
    }
});

export const upload = multer({ storage });

// Update this function to ensure we return a proper JSON structure
export const parsePictures = (files: Express.Multer.File[]) => {
    return files.map(file => ({
        url: `/uploads/${file.filename}`, // Save the file path (relative URL)
        description: file.originalname // Save original file name
    }));
};
