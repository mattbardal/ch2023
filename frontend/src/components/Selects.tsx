import { Box, Select } from "@chakra-ui/react";
import { countries } from "../data/countries";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export default function Selects() {
  return (
    <Box
      mt="5"
      bg="boxGradient"
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

export default function Selects() {
  const options = ["Educated Men", "Educated Women", "Gog"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "selections",
    defaultValue: options[0],
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} p='10px' borderRadius='lg' bg='grey.50' boxShadow='lg'>
      {options.map((value) => {
        const radio = getRadioProps({ value });

        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
