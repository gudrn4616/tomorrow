var http = require("http");
var fs = require("fs");
var url = require("url"); //url이라고 하는 모듈을 사용 할 것이다. url이라는 변수를 통해서 사용할 것이다.

function headlateHtml(title,list,control) {
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
}

function listtemplateHTML(description) {
  return `
      <p>${description}</p>
      </body>
    </html>
    `;
}

function templatelist(filelist) {
  var list = `<ul>`;

  for (var i = 0; i < filelist.length; i++) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
  }
  list += `</ul>`;

  return list;
}

function listtemplateRender(response, filelist, title, description, control) {
  var list = templatelist(filelist);
  var template = headlateHtml(title,list,control) + listtemplateHTML(description);
  response.writeHead(200);
  response.end(template);
}

module.exports = {
  listtemplateHTML: listtemplateHTML,
  listtemplateRender: listtemplateRender,
  templatelist: templatelist
};
