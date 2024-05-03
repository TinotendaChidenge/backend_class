// Import the HTTP module
const http = require('http');

// Define the port the server will listen on
const port = 3000;

// Create a HTTP server
http.createServer(function(req, res){
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("I'm Tinotenda Chidenge, a passionate software engineering student specializing in backend web development. With a strong educational background in software engineering, I'm currently participating in a rigorous backend web development bootcamp, expanding my skills and knowledge in the field. As a software engineer, I'm driven to stay at the forefront of technological advancements and contribute to innovative projects. I'm eager to leverage my expertise in backend web development to create robust and scalable solutions that enhance user experiences and drive business growth.");
    res.end();
}).listen(port);




