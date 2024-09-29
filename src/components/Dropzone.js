// src/app/Dropzone.js
"use client"; // Ensure it's treated as a client-side component

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text } from "@chakra-ui/react";

export default function Dropzone() {
  // Define file types you're allowing
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // Handle file upload or processing here
  }, []);

  // Set up dropzone options for accepted file types
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  return (
    <Box
      {...getRootProps()}
      height="300px"
      opacity={isDragActive ? 0.3 : 0.5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderWidth="2px"
      borderRadius="lg"
      borderColor={isDragActive ? "green.400" : "gray.400"}
      borderStyle="dashed"
      backgroundColor="gray.100"
      textAlign="center"
      p={5}
      cursor="pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text fontSize="lg" color="green.400">
          Drop the files here...
        </Text>
      ) : (
        <Text fontSize="lg" color="gray.600">
          Drag & drop a PDF, PNG, DOCX, or JPEG here, or click to select files
        </Text>
      )}
    </Box>
  );
}
