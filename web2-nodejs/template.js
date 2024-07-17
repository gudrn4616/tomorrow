var http = require("http"); // http 모듈을 사용하여 서버를 생성
var fs = require("fs"); // 파일 시스템 모듈을 사용하여 파일을 읽고 씀
var url = require("url"); // url 모듈을 사용하여 URL을 파싱

var template = {
  // HTML 헤더와 제목, 리스트, 컨트롤을 포함한 템플릿을 생성하는 함수
  headlateHtml: function(title, list, control) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        <h2>${title}</h2>
      `;
  },

  // HTML 본문에 설명을 포함한 템플릿을 생성하는 함수
  listtemplateHTML: function(description) {
    return `
        <p>${description}</p>
        </body>
      </html>
      `;
  },

  // 파일 목록을 HTML 리스트로 변환하는 함수
  templatelist: function(filelist) {
    var list = `<ul>`; // 파일 목록을 담을 리스트 초기화

    for (var i = 0; i < filelist.length; i++) {
      list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`; // 각 파일에 대한 링크 추가
    }
    list += `</ul>`; // 리스트 닫기

    return list; // 리스트 반환
  },

  // 전체 템플릿을 생성하고 응답하는 함수
  listtemplateRender: function(response, filelist, title, description, control) {
    var list = this.templatelist(filelist); // 파일 목록 생성
    var template = this.headlateHtml(title, list, control) + this.listtemplateHTML(description); // 전체 템플릿 생성
    response.writeHead(200); // 응답 헤더 작성
    response.end(template); // 응답 종료
  }
};

module.exports = template; // template 모듈을 내보냄
