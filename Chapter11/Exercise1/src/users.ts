import fs = require("fs");

function loadJSONSync(filename: string) {
  return JSON.parse(fs.readFileSync(filename));
}
