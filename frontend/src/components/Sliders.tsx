import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";

const CustomSlider = () => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <>
      <Box p="3" py="20px" bgColor="grey.50" borderRadius="full" shadow="lg">
        <Slider
          aria-label="slider-ex-2"
          defaultValue={1}
          orientation="vertical"
          min={0.2}
          max={2}
          step={0.2}
          onChange={(v) => setSliderValue(v)}
        >
          <SliderTrack>
            <SliderFilledTrack bg="boxGradient" />
          </SliderTrack>
          <Tooltip
            hasArrow
<<<<<<< HEAD
            bg="linear-gradient(to right, #8377D1 10%, #cb92bf )"
            color="white"
            placement="right"
=======
            bg="boxGradient"
            color='white'
            placement='right'
>>>>>>> bcb2318 (added gini info modal)
            isOpen
            label={`${sliderValue}x`}
            borderRadius="lg"
          >
            <SliderThumb w="20px" h="20px" border="2pt solid #B1B1B1" />
          </Tooltip>
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
        <CustomSlider />
      </HStack>
      <HStack w="100%" mt="5" alignItems="left" justifyContent="space-around">
        <Text>one</Text>
        <Text>two</Text>
        <Text>three</Text>
      </HStack>
    </>
  );
}
