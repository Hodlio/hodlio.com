const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

app.all("/api/*", function(req, res) {
    apiProxy.web(req, res, { target: 'http://localhost:8084' });
});npm s

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'build/index.html'));
});

app.use(express.static('build'));

app.listen(8083, () => console.log('Server listening on port 8083!'));