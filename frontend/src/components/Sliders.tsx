import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";

const CustomSlider = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="xl">
        cool 1
      </Text>
      <Box p="3" bgColor="grey.50" borderRadius="full" shadow="lg">
        <Slider aria-label="slider-ex-2" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack bg="linear-gradient(to right, #cb63cb 55%,#292541)" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </>
  );
};

export default function Sliders() {
  return (
    <VStack w="100%" h="125px" mt="5" alignItems="left" spacing="10px">
      <CustomSlider />
      <CustomSlider />
    </VStack>
  );
}
