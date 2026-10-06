import bcrypt from "bcryptjs";
import fs from "fs";

const [user, pass] = process.argv.slice(2);
if (!user || !pass || pass.length < 12) {
  console.error(
    "Usage: node scripts/make-creds.mjs <username> <password (12+ chars)>",
  );
  process.exit(1);
}
fs.writeFileSync(
  "creds.json",
  JSON.stringify(
    { username: user, passwordHash: bcrypt.hashSync(pass, 12) },
    null,
    2,
  ),
  { mode: 0o600 },
);
console.log("creds.json created");
