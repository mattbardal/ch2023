import { Box, Select } from "@chakra-ui/react";
import { countries } from "../data/countries";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default function Selects({ setCountry }: any) {

  const handleCountryChange = (e: any) => {
    setCountry(e?.target?.value)
  }

  return (
    <Box mt="5" bg="boxGradient" borderRadius="lg" color="white">
      <Select
        border="none"
        defaultValue={"CA"}
        onChange={handleCountryChange}
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
              {getUnicodeFlagIcon(country.country)} {country.name}
            </option>
          ))}
      </Select>
    </Box>
  );
}
