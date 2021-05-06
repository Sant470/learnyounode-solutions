const listFiles = require('./mymodule');
const dir = process.argv[2];
const extension = process.argv[3];


listFiles(dir, extension, (err, files) => {
  if(err) console.log(err);
  files.forEach((file) => console.log(file));
});
