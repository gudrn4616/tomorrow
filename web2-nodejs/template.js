var http    = require('http');
var fs      = require('fs');
var url     = require('url'); //url이라고 하는 모듈을 사용 할 것이다. url이라는 변수를 통해서 사용할 것이다.

function templateHTML(title, list, description) {
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
      <h2>${title}</h2>
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

function templateRender(response, filelist, title, description) {
    var list = templatelist(filelist);
    var template = templateHTML(title, list, description);
    response.writeHead(200);
    response.end(template);
}

module.exports = {
    templateHTML: templateHTML,
    templatelist: templatelist,
    templateRender: templateRender
};