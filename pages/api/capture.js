
let capturedData = [];

export default function handler(req, res) {
 if (req.method === 'POST') {
 const { ip, location } = req.body;
 console.log(`IP Address: ${ip}`);
 console.log(`Location: ${JSON.stringify(location)}`);

 // Store the captured data
 capturedData.push({ ip, location, timestamp: new Date() });

 res.status(200).json({ message: 'Data captured successfully' });
 } else if (req.method === 'GET' && req.query.admin) {
 res.status(200).json(capturedData);
 } else {
 res.setHeader('Allow', ['POST', 'GET']);
 res.status(405).end(`Method ${req.method} Not Allowed`);
 }
}

