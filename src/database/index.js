const fs = require("fs");
const path = require("path");

module.exports = {
    planes: JSON.parse(fs.readFileSync(path.join(__dirname, "/planesFitness.json"), "utf-8"))
};