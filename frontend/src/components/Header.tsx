import { Box, Heading, HStack, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box py="10px">
      <HStack>
        <Heading color="black">Look at this</Heading>
        <Heading
          background="boxGradient"
          backgroundClip="text"
        >
          Graph
        </Heading>
      </HStack>
    </Box>
  );
}
