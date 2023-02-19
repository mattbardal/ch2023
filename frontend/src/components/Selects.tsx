import { Box, Select } from "@chakra-ui/react";

export default function Selects() {
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        color='white'
        bg="black"
        backgroundSize='200% auto'
        borderRadius="lg"
        boxShadow="md"
        _checked={{
          bg:"linear-gradient(107deg, #9733EE 0%, #DA22FF  51%)",
          color: "white",
          boxShadow: "none",
        }}
        px='10px'
        py='5px'
      >
        {props.children}
      </Box>
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
