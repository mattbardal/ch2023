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

  const [sliderValue, setSliderValue] = useState(1)
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <>
      <Box p="3" py='20px' bgColor="grey.50" borderRadius="full" shadow="lg">
        <Slider
          aria-label="slider-ex-2"
          defaultValue={1}
          orientation="vertical"
          min={1} max={10} step={0.2}
          onChange={(v) => setSliderValue(v)}
        >
          <SliderTrack>
            <SliderFilledTrack bg="linear-gradient(to right, #8377D1 10%, #cb92bf )" />
          </SliderTrack>
          <Tooltip
        hasArrow
        bg="linear-gradient(to right, #8377D1 10%, #cb92bf )"
        color='white'
        placement='right'
        isOpen
        label={`${sliderValue}%`}
        borderRadius='lg'
      >
        <SliderThumb w='20px' h='20px' />
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
      </HStack>
      <HStack w="100%" mt="5" alignItems="left" justifyContent="space-around">
        <Text>one</Text>
        <Text>two</Text>
      </HStack>
    </>
  );
}
