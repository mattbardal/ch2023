import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

const CustomSlider = () => {
  return (
    <>
      <Box p="3" bgColor="grey.50" borderRadius="full" shadow="lg">
        <Slider
          aria-label="slider-ex-2"
          defaultValue={30}
          orientation="vertical"
        >
          <SliderTrack>
            <SliderFilledTrack bg="linear-gradient(to right, #8377D1 10%, #cb92bf )" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </>
  );
};

export default function Sliders() {
  return (
    <>
      <HStack
        w="100%"
        h="75%"
        mt="5"
        alignItems="left"
        justifyContent="space-around"
      >
        <CustomSlider />
        <CustomSlider />
      </HStack>
      <HStack w="100%" mt="5" alignItems="left" justifyContent="space-around">
        <Text>one</Text>
        <Text>two</Text>
      </HStack>
    </>
  );
}
