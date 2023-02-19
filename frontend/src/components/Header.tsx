import { Box, Heading, HStack, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box py="10px">
      <HStack>
        <Heading color="black">Example</Heading>
        <Heading
          background="linear-gradient(to right, #8377D1 10%, #5f1d51 55%)"
          backgroundClip="text"
        >
          App
        </Heading>
      </HStack>
    </Box>
  );
}
