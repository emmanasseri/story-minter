// src/app/page.js
import React from "react";
import { Text } from "@chakra-ui/react";
import ParticlesBackground from "../components/ParticlesBackground";
import Dropzone from "@/components/Dropzone";
import Header from "@/components/Header";
import Head from "next/head";

export default function HomePage() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* This div contains the visible content and has a higher z-index */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Dropzone />
      </div>
      <ParticlesBackground />
    </div>
  );
}
