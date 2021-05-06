const http = require('http');
const fs = require('fs');
const [port, pathtofile] = [process.argv[2], process.argv[3]];


const server = http.createServer((req, res) => {
  fs.createReadStream(pathtofile).pipe(res);
});


server.listen(port, () => { console.log(`listening  to the port: ${port}!`)});
