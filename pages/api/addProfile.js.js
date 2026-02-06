import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const filePath = path.join(process.cwd(), "public/data/profiles.json");

  const existing = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : [];

  const updated = [...existing, req.body];

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));

  res.status(200).json({ success: true });
}
