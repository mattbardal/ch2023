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

const CustomSlider = (props:any) => {

  return (
    <>
      <Box p="1" py="20px" bgColor="grey.50" borderRadius="full" shadow="lg">
        <Slider
          aria-label="slider-ex-2"
          defaultValue={1}
          orientation="vertical"
          min={0.2}
          max={5}
          step={0.2}
          onChange={(v) => props.handleSlider(v)}
        >
          <SliderTrack>
            <SliderFilledTrack bg="boxGradient" />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="boxGradient"
            color="white"
            placement="right"
            isOpen
            label={`${props.sliderValue}x`}
            borderRadius="lg"
          >
            <SliderThumb w="20px" h="20px" border="2pt solid #B1B1B1" />
          </Tooltip>
        </Slider>
      </Box>
    </>
  );
};

export default function Sliders(props:any) {
  return (
    <>
      <HStack
        w="100%"
        h="75%"
        mt="5"
        alignItems="left"
        justifyContent="space-around"
      >
        <CustomSlider handleSlider={props.handleSlider1} sliderValue={props.sliderValue1}/>
        <CustomSlider handleSlider={props.handleSlider2} sliderValue={props.sliderValue2}/>
        <CustomSlider handleSlider={props.handleSlider3} sliderValue={props.sliderValue3}/>
      </HStack>
      <HStack w="100%" mt="2" alignItems="left" justifyContent="space-around">
        <Tooltip label="Average years of total schooling"><Text textAlign='center' fontSize='3xl'>📚</Text></Tooltip>
        <Tooltip label="Graduation from Post Secondary"><Text textAlign='center' fontSize='3xl'>🎓</Text></Tooltip>
        <Tooltip label="Population Growth"><Text textAlign='center' fontSize='3xl'>👶</Text></Tooltip>
      </HStack>
    </>
  );
}
