"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Load the full tsparticles engine

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    // Ensure the full tsparticles engine is loaded with all the necessary plugins/interactions
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#5805d9", // Background color
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
}
