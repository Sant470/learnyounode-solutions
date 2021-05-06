const fs = require('fs');
module.exports = (pathtodir, extension, callback) => {
  fs.readdir(pathtodir, (err, files) => {
    if(err) return callback(err);
    files = files.filter((file) => { return file.slice(-(extension.length + 1)) === `.${extension}`});
    callback(err, files);
  });
}
