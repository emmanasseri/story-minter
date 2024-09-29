// src/app/page.js
import React from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function HomePage() {
  return (
    <div>
      {/* Render the particles background */}
      <ParticlesBackground />

      {/* Main content */}
      <h1 style={{ textAlign: "center", color: "#fff" }}>
        Welcome to My Cool Next.js App
      </h1>
    </div>
  );
}
