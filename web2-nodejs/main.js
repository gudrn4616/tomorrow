var http = require('http');
var fs = require('fs');
var url = require('url'); //url이라고 하는 모듈을 사용 할 것이다. url이라는 변수를 통해서 사용할 것이다.
var template = require('./template.js'); // import를 require로 변경


var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';

        template.templateRender(response, filelist, title, description);

      });
    } 
    else 
    {
      fs.readdir('./data', function (error, filelist) {
        fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
          var title = queryData.id;

          template.templateRender(response, filelist, title, description);
          
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('not found');
  }
});
app.listen(3000);
