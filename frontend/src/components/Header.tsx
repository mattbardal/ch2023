import { Box, Heading, HStack } from "@chakra-ui/react";
import { countries } from "../data/countries";

export default function Header({country} : {country: string}) {
  return (
    <Box py="10px">
      <HStack>
        <Heading color="black">Gini Index of </Heading>
        <Heading background="boxGradient" backgroundClip="text">
          {`${country === "NL" ? "The " : ""}${countries.find((c) => c.country === country)?.name}`}
        </Heading>
        <Heading color="black">over time</Heading>
      </HStack>
    </Box>
  );
}
