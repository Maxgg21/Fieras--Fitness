const fs = require("fs");
const path = require("path");

module.exports = {
    planes: JSON.parse(fs.readFileSync(path.join(__dirname, "/planesFitness.json"), "utf-8")),
    videosPlanes: JSON.parse(fs.readFileSync(path.join(__dirname, "/videosPlanes.json"), "utf-8"))
};