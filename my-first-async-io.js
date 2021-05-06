const fs = require('fs');
const path = process.argv[2];
const countLines = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, buffer) => {
      if(err) reject(err);
      const data = buffer.toString();
      const lines = data.split("\n").length - 1;
      resolve(lines);
    })
  });
}

countLines(path)
  .then((lines) =>{
    console.log(lines);
  })
  .catch((err) => {
    console.log(err);
  })
