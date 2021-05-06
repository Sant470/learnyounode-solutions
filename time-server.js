const net = require('net');
const port = process.argv[2] || 3000;

// poem ~learnyounode
const zeroFill = (num) => {
  return (num < 10 ? '0' : '') + num
}

const now = () => {
  const datetime = new Date();
  return `${datetime.getFullYear()}-${zeroFill(datetime.getMonth() + 1)}-${zeroFill(datetime.getDate())} ${zeroFill(datetime.getHours())}:${zeroFill(datetime.getMinutes())}`;
}

const currentDateTime = now();

const server = net.createServer((socket) => {
  socket.end(`${currentDateTime}\n`);
}).on('error', (err) => {
  throw err;
});

server.listen(port, () => {});
