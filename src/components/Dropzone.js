// src/app/components/Dropzone.js
"use client"; // Ensure this is a client component

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

export default function Dropzone({ onFileAccepted }) {
  const [file, setFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      onFileAccepted(selectedFile); // Pass the file to the parent component
    },
    [onFileAccepted]
  );

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
      width="100%"
      height="300px"
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
          {file
            ? `Selected file: ${file.name}`
            : "Drag & drop a PDF, PNG, DOCX, or JPEG here"}
        </Text>
      )}
    </Box>
  );
}
