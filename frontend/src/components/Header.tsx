import { Box, Heading } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box py='10px'>
      <Heading
        // background="linear-gradient(to right, #8377D1 10%, #F7DD72 55%)"
        // backgroundClip="text"
        color='black'
      >
        SampleTitleNameGoHere
      </Heading>
    </Box>
  );
}
