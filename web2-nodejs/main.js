var http = require("http"); // http 모듈을 사용하여 서버를 생성
var fs = require("fs"); // 파일 시스템 모듈을 사용하여 파일을 읽고 씀
var url = require("url"); // url 모듈을 사용하여 URL을 파싱
var template = require("./template.js"); // template.js 모듈을 불러옴
var qs = require("querystring"); // querystring 모듈을 사용하여 쿼리 문자열을 처리
var path=require("path");//path 모듈을 사용하여 경로를 처리
var sanitizeHtml=require("sanitize-html");//sanitize-html 모듈을 사용하여 HTML 코드를 제거

// 서버를 생성하고 요청을 처리하는 함수
var app = http.createServer((request, response)=> {
  var _url = request.url; // 요청된 URL
  var queryData = url.parse(_url, true).query; // URL에서 쿼리 문자열을 파싱
  var pathname = url.parse(_url, true).pathname; // URL에서 경로를 파싱

  // 루트 경로에 대한 요청 처리
  if (pathname === "/") {
    if (queryData.id === undefined) {
      // id가 없는 경우
      fs.readdir("./data",  (error, filelist) => {
        var title = "Welcome"; // 기본 제목
        var description = "Hello, Node.js"; // 기본 설명
        var control = `<a href="/create">create</a>`; // 생성 링크

        // 템플릿을 렌더링하여 응답
        template.listtemplateRender(
          response,
          filelist,
          title,
          description,
          control
        );
      });
    } else {
      // id가 있는 경우
      fs.readdir("./data", (error, filelist) =>{
        var filteredId=path.parse(queryData.id).base;
        fs.readFile(
          `data/${filteredId}`,
          "utf8",
          function (err, description) {
            var sanitizeTitle=sanitizeHtml(queryData.id);
            var sanitizeDescription=sanitizeHtml(description,{
              allowedTags:['h1']
            });
            var title = sanitizeTitle; // 파일 이름을 제목으로 사용
            var description = sanitizeDescription; // 파일 설명을 제목으로 사용
            var control = `<a href="/create">create</a> 
            <a href="/update?id=${title}">update</a> 
            <form action="/delete_process" method="post">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
            </form>`; // 생성 및 업데이트 링크

            // 템플릿을 렌더링하여 응답
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
    // 생성 경로에 대한 요청 처리
    fs.readdir("./data", function (error, filelist) {
      var title = "Web - create"; // 생성 페이지 제목
      var description = `<form action="/create_process" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p><textarea name="description" placeholder="description"></textarea></p>
      <p><input type="submit"></p>
    </form>`; // 생성 폼
      var control = '<a href="/create">create</a>'; // 생성 링크

      // 템플릿을 렌더링하여 응답
      template.listtemplateRender(
        response,
        filelist,
        title,
        description,
        control
      );
    });
  } else if (pathname === "/create_process") {
    // 생성 처리 경로에 대한 요청 처리
    var body = "";
    request.on("data", function (data) {
      // 데이터가 수신될 때마다 호출
      body += data;
    });

    request.on("end", function () {
      // 데이터 수신이 완료되면 호출
      var post = qs.parse(body); // 수신된 데이터를 파싱
      var title = post.title; // 제목
      var description = post.description; // 설명
      fs.writeFile(`data/${title}`, description, "utf8", (err) => {
        if (err) throw err;
        response.writeHead(302, { location: `/?id=${title}` }); // 리다이렉트
        response.end();
      });
    });
  } else if (pathname == "/update") {
    // 업데이트 경로에 대한 요청 처리
    fs.readdir("./data", function (error, filelist) {
      var filteredId=path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, "utf8", (err, description) => {
        var title = queryData.id; // 파일 이름을 제목으로 사용
        var control = `<a href="/create">create</a>
        <a href="/update?id=${title}">update</a>`; // 생성 및 업데이트 링크

        // input에서 hidden 이라는 것이 있다 .
        var description = `<form action="/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
        <p><textarea name="description" placeholder="description">${description}</textarea></p>
        <p><input type="submit"></p>
        </form>`; // 업데이트 폼

        // 템플릿을 렌더링하여 응답
        template.listtemplateRender(
          response,
          filelist,
          title,
          description,
          control
        );
      });
    });
  } else if (pathname === "/update_process") {
    var body = "";
    request.on("data", function (data) {
      body += data;
    });
    request.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;

      fs.rename(`data/${id}`, `data/${title}`, (err) => {
        fs.writeFile(`data/${id}`, description, (error) => {
          response.writeHead(302, { location: `/?id=${title}` });
          response.end();
        });
      });
    });
  } else if (pathname == "/delete_process") {
    var body = "";
    request.on("data", function (data) {
      body += data;
    });
    request.on("end", () => {
      var post = qs.parse(body);
      var id = post.id;
      var filteredId=path.parse(queryData.id).base;
      fs.unlink(`./data/${filteredId}`, (err) => {
        response.writeHead(302, { location: `/` });
        response.end();
      });
    });
  } else {
    // 그 외의 경로에 대한 요청 처리
    response.writeHead(404); // 404 상태 코드
    response.end("not found"); // 응답 종료
  }
});

// 서버를 3000번 포트에서 실행
app.listen(3000);
