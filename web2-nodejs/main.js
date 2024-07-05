var http = require("http");
var fs = require("fs");
var url = require("url"); //url이라고 하는 모듈을 사용 할 것이다. url이라는 변수를 통해서 사용할 것이다.
var template = require("./template.js"); // import를 require로 변경
var qs = require("querystring");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (error, filelist) {
        var title = "Welcome";
        var description = "Hello, Node.js";
        var control = `<a href="/create">create</a>`;

        template.listtemplateRender(
          response,
          filelist,
          title,
          description,
          control
        );
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        fs.readFile(
          `data/${queryData.id}`,
          "utf8",
          function (err, description) {
            var title = queryData.id;
            var control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`;

            template.listtemplateRender(
              response,
              filelist,
              title,
              description,
              control
            );
          }
        );
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", function (error, filelist) {
      var title = "Web - create";
      var description = `<form action="http://localhost:3000/create_process" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p><textarea name="description" placeholder="description"></textarea></p>
      <p><input type="submit"></p>
    </form>`;
      var control = '<a href="/create">create</a>';

      template.listtemplateRender(
        response,
        filelist,
        title,
        description,
        control
      );
    });
  } else if (pathname === "/create_process") {
    var body = "";
    request.on("data", function (data) {
      body += data;
    });

    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        if (err) throw err;
        response.writeHead(302, { location: `/?id=${title}` }); //302는 리다이렉트 상태 코드
        response.end("success");
      });
    });
  } else if (pathname == "/update") {
    fs.readdir("./data", function (error, filelist) {
      fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
        var title = queryData.id;
        var control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`;

        var description = `<form action="http://localhost:3000/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
        <p><textarea name="description" placeholder="description">${description}</textarea></p>
        <p><input type="submit"></p>
        </form>`;

        template.listtemplateRender(response,filelist,title,description,control);
      });
    });
  } else {
    response.writeHead(404);
    response.end("not found");
  }
});

app.listen(3000);
