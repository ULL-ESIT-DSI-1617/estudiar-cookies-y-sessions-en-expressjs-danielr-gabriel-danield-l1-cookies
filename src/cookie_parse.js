var cookie = require('cookie');
var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');
 
function onRequest(req, res) {
  // Analiza la cola de tipo string
  var query = url.parse(req.url, true, true).query;
 
  if (query && query.name) {
    // Crea una nueva cookie con el nombre name
    res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week 
    }));
 
    // Redirecciona hacia detrás ddespués de crear una cookie
    res.statusCode = 302;
    res.setHeader('Location', req.headers.referer || '/');
    res.end();
    return;
  }
 
  // Analiza la cookie en la solicitud 
  var cookies = cookie.parse(req.headers.cookie || '');
 
  // Obtiene el nombre del visitante en la cookie
  var name = cookies.name;
 
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
 
  if (name) {
    res.write('<p>Welcome back, <b>' + escapeHtml(name) + '</b>!</p>');
  } else {
    res.write('<p>Hello, new visitor!</p>');
  }
 
  res.write('<form method="GET">');
  res.write('<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name">');
  res.end('</form');
}
 
http.createServer(onRequest).listen(3000);
