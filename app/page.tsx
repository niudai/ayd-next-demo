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
        style={{
          height: 640,
          width: 400,
        }}
        src={iframeUrl}
      ></iframe>
    </main>
  );
}
