import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box>
      <Heading
        background="linear-gradient(to right, #c337dc 0%, #f7e700 25%)"
        backgroundClip="text"
      >
        education
      </Heading>
    </Box>
  );
}
