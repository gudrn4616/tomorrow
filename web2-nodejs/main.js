var http = require('http');
var fs = require('fs');
var url = require('url'); //url이라고 하는 모듈을 사용 할 것이다. url이라는 변수를 통해서 사용할 것이다.

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        console.log(filelist);
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = `<ul>`;
        for (var i = 0; i < filelist.length; i++) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        }
        list += `</ul>`;
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
        //response.end(fs.readFileSync(__dirname + _url));//파일을 읽어주는 것
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data', function (error, filelist) {
        console.log(filelist);
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = `<ul>`;
        for (var i = 0; i < filelist.length; i++) {
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        }
        list += `</ul>`;
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          //response.end(fs.readFileSync(__dirname + _url));//파일을 읽어주는 것
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('not found');
  }
});
app.listen(3000);
