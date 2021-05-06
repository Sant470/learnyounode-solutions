const http = require('http');
const url = process.argv[2];

const getCall = (url, header) => {
  const datas = [];
  return new Promise((resolve, reject) => {
    http.get(url , (response) => {
      response.on('err', (err) => { reject(err) });
      response.on('data', (buffer) => {
        const strData = buffer.toString();
        datas.push(strData);
      });
      response.on('end', () => { resolve(datas)});
    }).end();
  })
}

getCall(url, {})
  .then((datas) => {
    const data = datas.join("");
    console.log(data.length);
    console.log(data);
  })
  .catch((err) => { console.log(err)});
