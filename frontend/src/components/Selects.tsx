import { Box, Select } from "@chakra-ui/react";
import { countries } from "../data/countries";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default function Selects() {
  return (
    <Box
      mt="5"
      bgGradient="linear-gradient(to right, #8377D1 10%, #cb92bf )"
      borderRadius="lg"
      color="white"
    >
      <Select
        placeholder="Select a country..."
        border="none"
        defaultValue={"CA"}
      >
        {countries
          .sort((a, b) => {
            if (a.name[0] < b.name[0]) {
              return -1;
            }
            if (a.name[0] > b.name[0]) {
              return 1;
            }
            return 0;
          })
          .map((country) => (
            <option key={country.country} value={country.country}>
              {getUnicodeFlagIcon(country.name)} {country.name}
            </option>
          ))}
      </Select>
    </Box>
  );
}
