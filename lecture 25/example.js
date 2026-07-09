const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const userData = {
    name: "Naman",
    age: 22,
    email: "naman@gmail.com"
};

http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);

    // Home Page
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { "content-type": "text/html" });

        res.write(`
            <h1>Home Page</h1>

            <form action="/submit" method="POST">
                <input type="text" placeholder="Enter Name" name="name" />
                <input type="text" placeholder="Enter Email" name="email" />
                <button>Submit</button>
            </form>
            <form action="/api" method="POST"> 
                <button>show data</button>
            </form>
        `);

        res.end();
    }

    // Login Page
    else if (req.url === '/login') {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Login Page</h1>");
        res.end();
    }

    // API Route
    else if (req.url === '/api') {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(userData));
        res.end();
    }

    // Form Submit
    else if (req.url === '/submit' && req.method === 'POST') {

        let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });

        req.on('end', () => {
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = querystring.parse(rawData);

            console.log(readableData);

            res.writeHead(200, { "content-type": "text/html" });

            res.write(`
                <h1>Form Submitted</h1>
                Name: ${readableData.name} <br>
                Email: ${readableData.email}
            `);

            res.end();
        });
    }

    // Other Routes
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>Other Page / Not Found</h1>");
        res.end();
    }

}).listen(3200, () => {
    console.log("Server running on port 3200");
});