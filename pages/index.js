import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function captureData() {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();

        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              resolve({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
              });
            },
            reject
          );
        });

        await fetch("/api/capture", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip: ipData.ip, location }),
        });
      } catch (err) {
        console.error(err);
      }
    }

    captureData();
  }, []);

  return <h1>Loading...</h1>;
}
