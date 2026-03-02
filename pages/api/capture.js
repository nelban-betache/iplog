
let capturedData = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { ip, location } = req.body;

    capturedData.push({
      ip,
      location,
      timestamp: new Date(),
    });

    return res.status(200).json({ message: "Captured" });
  }

  if (req.method === "GET" && req.query.admin) {
    return res.status(200).json(capturedData);
  }

  res.status(405).json({ message: "Method not allowed" });
}

