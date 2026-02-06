import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const dataDir = path.join(process.cwd(), "public/data");
    const files = fs.readdirSync(dataDir);

    const profiles = files.map((file) => {
      const filePath = path.join(dataDir, file);
      const fileData = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileData);
    });

    res.status(200).json(profiles.flat());
  } catch (err) {
    res.status(500).json({ error: "Failed to load profiles" });
  }
}
