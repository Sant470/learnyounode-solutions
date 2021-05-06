const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

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

const promises = [
  getCall(url1),
  getCall(url2),
  getCall(url3)
];

Promise.all(promises)
  .then((responses) => {
    responses.forEach((response) => {
      console.log(response.join(""));
    })
  })
  .catch((err) => { console.log(err)});
