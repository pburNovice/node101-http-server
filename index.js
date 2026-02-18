const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
    });

    const PORT = 8080;
    
    server.listen(PORT,() => {
        console.log(`server is listening on port ${PORT}`);
    });

