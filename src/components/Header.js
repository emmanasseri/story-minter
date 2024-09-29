// src/app/components/Header.js
import React from "react";
import { Box, Heading, Button, VStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box textAlign="center" py={10} px={6} borderRadius="lg">
      <Heading as="h1" size="xl" color="white" mb={5}>
        Mint your files as IP assets on the Story Network
      </Heading>
      <VStack spacing={4}>
        <Button
          as="a"
          href="https://www.story.foundation/"
          target="_blank"
          rel="noopener noreferrer"
          background="#df88b2"
          size="lg"
        >
          What is Story?
        </Button>
        <Button
          as="a"
          href="https://storyprotocol.io/docs"
          target="_blank"
          rel="noopener noreferrer"
          background="#f68629"
          size="lg"
        >
          Read Documentation
        </Button>
        <Button
          as="a"
          href="https://docs.story.foundation/docs/explain-like-im-five"
          target="_blank"
          rel="noopener noreferrer"
          background="#80c0ba"
          size="lg"
        >
          Explain Like I'm Five
        </Button>
      </VStack>
    </Box>
  );
}
