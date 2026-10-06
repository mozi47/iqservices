import fs from "fs";
import path from "path";

export const SITE_PATH = path.join(process.cwd(), "content", "site.json");
export const getSite = () => JSON.parse(fs.readFileSync(SITE_PATH, "utf8"));
