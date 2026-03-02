import { useEffect, useState } from 'react';

export default function Admin() {
 const [data, setData] = useState([]);

 useEffect(() => {
 fetch('/api/capture?admin=true')
 .then(response => response.json())
 .then(data => setData(data))
 .catch(error => console.error('Error fetching data:', error));
 }, []);

 return (
 <div>
 <h1>Captured Data</h1>
 <ul>
 {data.map((entry, index) => (
 <li key={index}>
 <p><strong>Entry {index + 1}</strong></p>
 <p>IP Address: {entry.ip}</p>
 <p>Location: Lat {entry.location.latitude}, Lon {entry.location.longitude}</p>
 <p>Timestamp: {entry.timestamp}</p>
 </li>
 ))}
 </ul>
 </div>
 );
}


