import { Box, Heading, HStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box py="10px">
      <HStack>
        <Heading color="black">Example</Heading>
        <Heading
          background="linear-gradient(to right, #8377D1 10%, #cb92bf )"
          backgroundClip="text"
        >
          App
        </Heading>
      </HStack>
    </Box>
  );
}
