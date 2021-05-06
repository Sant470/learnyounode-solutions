const http = require('http');
const { URL } = require('url');

const port = process.argv[2];

const parsetimeHandler = (params, res) => {
  const date = new Date(params.get('iso'));
  res.end(JSON.stringify({
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  }));
};

const unixTimeHandler = (params, res) => {
  const date = new Date(params.get('iso'));
  res.end(JSON.stringify({
    unixtime: date.getTime()
  }));
}

const server = http.createServer((req, res) => {
  if(req.method !== 'GET') {
    res.end();
  }

  const baseUrl = 'http://' + req.headers.host + '/';
  const url = new URL(req.url, baseUrl);
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(url.pathname === '/api/parsetime') {
    parsetimeHandler(url.searchParams, res);
  }
  if(url.pathname === '/api/unixtime') {
    unixTimeHandler(url.searchParams, res);
  }

});

server.listen(port, () => console.log(`listening to the port: ${port}`));
