const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const extension = process.argv[3];

const filterFiles = (dir, extension) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if(err) reject(err);
      files = files.filter((file) => { return file.slice(-(extension.length + 1)) === `.${extension}`});
      resolve(files);
    });
  });
}


filterFiles(dir, extension)
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    console.log(err);
  })
