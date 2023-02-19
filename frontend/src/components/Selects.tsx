import { Box, Select } from "@chakra-ui/react";

export default function Selects() {
  return (
    <Box
      mt="5"
      bgGradient="linear-gradient(to right, #8377D1 10%, #cb92bf )"
      borderRadius="lg"
      color="white"
    >
      <Select placeholder="Select option" border="none">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Box>
  );
}
