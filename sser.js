const http = require("http");
const host = 'localhost';
const port = 3000;
const fs = require('fs').promises;
const requestListener = function (req, res) {
fs.readFile("java.html")
fs.readFile("musical.html")
fs.readFile("zzz.html")
.then(contents => {
res.setHeader("Content-Type", "text/html/css");
res.writeHead(200);
res.end(contents);
})
.catch(err => {
res.writeHead(500);
res.end(err);
return;
});
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
console.log(`Server is running on http://${host}:${port}`);
});
