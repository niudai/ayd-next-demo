"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    fetch("/api/ayd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(({ url }) => {
        setIframeUrl(url);
      });
  }, []);

  return (
    <main>
      <iframe
        className="mx-auto"
        sandbox="allow-scripts allow-same-origin allow-presentation allow-forms allow-popups allow-downloads allow-storage-access-by-user-activation"
        style={{
          height: 640,
          width: 400,
        }}
        src={iframeUrl}
      ></iframe>
    </main>
  );
}
