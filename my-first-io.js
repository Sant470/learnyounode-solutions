const fs = require('fs');
const path = process.argv[2];
const strData = fs.readFileSync(path).toString();
const lines = strData.split("\n").length - 1;
console.log(lines);
