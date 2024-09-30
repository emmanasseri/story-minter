// src/app/page.js
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Header from "../components/Header";
import FileMinting from "../components/FileMinting";

export default function HomePage() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Header />
        <FileMinting />
      </div>

      <ParticlesBackground />
    </div>
  );
}
