const http = require('http');
const dataFilePath = process.argv[2];
const countStudents = require('./3-read_file_async');
    
const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});

    if (req.url === '/') {
        res.end("Hello Holberton School!");
    } else if (req.url === '/students') {
        res.write("This is the list of our students\n");

        const originalConsoleLog = console.log;
        let output = "";

     console.log = (msg) => {
        output += msg + '\n';
     };

     countStudents(dataFilePath)
      .then(() => {
        res.end(output);
        console.log = originalConsoleLog;
      })
      .catch((err) => {
        res.end("Cannot load the database");
        console.log = originalConsoleLog;
      });
    }
});

app.listen(1245, () => {
    console.log("Server is listening on http://localhost:1245");
});
module.exports = app;
