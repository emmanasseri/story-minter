// src/app/components/FileMinting.js
"use client";

import React, { useState } from "react";
import { useIpAsset } from "@story-protocol/react-sdk";
import { toHex } from "viem";
import Dropzone from "./Dropzone";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

export default function FileMinting() {
  const { register } = useIpAsset();
  const [file, setFile] = useState(null);
  const [minting, setMinting] = useState(false);
  const [ipMetadataURI, setIpMetadataURI] = useState("");
  const [nftMetadataURI, setNftMetadataURI] = useState("");

  const handleFileDrop = (selectedFile) => {
    setFile(selectedFile);
  };

  const mintAsset = async () => {
    if (!file || !ipMetadataURI || !nftMetadataURI) {
      alert("Please upload a file and fill out the metadata URIs.");
      return;
    }

    setMinting(true);

    try {
      const response = await register({
        nftContract: "0x01...", // Replace with your contract address
        tokenId: "1",
        ipMetadata: {
          ipMetadataURI,
          ipMetadataHash: toHex(ipMetadataURI, { size: 32 }),
          nftMetadataURI,
          nftMetadataHash: toHex(nftMetadataURI, { size: 32 }),
        },
        txOptions: { waitForTransaction: true },
      });

      console.log(
        `Root IPA created at tx hash ${response.txHash}, IPA ID: ${response.ipId}`
      );
      alert(`Asset minted successfully with IPA ID: ${response.ipId}`);
    } catch (error) {
      console.error("Error minting asset:", error);
      alert("Failed to mint asset.");
    }

    setMinting(false);
  };

  return (
    <VStack spacing={4} align="center">
      {/* Dropzone for file upload */}
      <Dropzone onFileAccepted={handleFileDrop} />

      {/* Input fields for metadata */}
      <Box>
        <Text color="white">IP Metadata URI:</Text>
        <Input
          placeholder="Enter IP Metadata URI"
          value={ipMetadataURI}
          onChange={(e) => setIpMetadataURI(e.target.value)}
        />
      </Box>
      <Box>
        <Text color="white">NFT Metadata URI:</Text>
        <Input
          placeholder="Enter NFT Metadata URI"
          value={nftMetadataURI}
          onChange={(e) => setNftMetadataURI(e.target.value)}
        />
      </Box>

      {/* Mint Button */}
      <Button
        colorScheme="teal"
        isLoading={minting}
        onClick={mintAsset}
        disabled={minting || !file || !ipMetadataURI || !nftMetadataURI}
      >
        Mint Asset
      </Button>
    </VStack>
  );
}
