// Applies the changes made on top of jnbp/extensions (ext/email-aliases).
const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.title = "Email Subaddresses & Aliases";
pkg.platforms = ["macOS"];
pkg.preferences.find((p) => p.name === "accounts").description =
  "Comma-separated list. The first entry is the default account used by Generate Email Alias. Use a full address for plus addressing (me@gmail.com) or @example.com for a catch-all domain. Add an optional display name with a colon: Work: me@company.com";
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

const changelog = fs.readFileSync("CHANGELOG.md", "utf8");
fs.writeFileSync("CHANGELOG.md", changelog.replace("# Email Aliases Changelog", "# Email Subaddresses & Aliases Changelog"));
