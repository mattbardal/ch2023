import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import Graph from "../components/Graph";
import PercentWheel from "../components/PercentWheel";
import Selects from "../components/Selects";
import Sliders from "../components/Sliders";
import InfoButton from "../components/InfoButton";
import { useState } from "react";

export default function MainContainer() {
  const [sliderValue1, setSliderValue1] = useState(1);
  const [sliderValue2, setSliderValue2] = useState(1);
  const [sliderValue3, setSliderValue3] = useState(1);
  const handleSlider1 = (val:any) => {setSliderValue1(val)}
  const handleSlider2 = (val:any) => {setSliderValue2(val)}
  const handleSlider3 = (val:any) => {setSliderValue3(val)}

  return (
    <Box borderRadius="lg">
      <Grid
        templateAreas={`"main select"
                        "footer nothing"`}
        gridTemplateColumns={"1fr 220px"}
        h="100%"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"main"}>
          <Graph />
        </GridItem>
        <GridItem pl="2" area={"select"}>
          <Selects />
          <Sliders
            handleSlider1={handleSlider1}
            handleSlider2={handleSlider2}
            handleSlider3={handleSlider3}
            sliderValue1={sliderValue1}
            sliderValue2={sliderValue2}
            sliderValue3={sliderValue3}
          />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          <PercentWheel />
        </GridItem>
        <GridItem pl="2" area={"nothing"}>
          <Center w="100%">
            <InfoButton />
            <Text pl='10px'>
              About Gini
            </Text>
          </Center>
          <Center w="100%">
            <InfoButton />
            <Text pl='10px'>
              About Gini
            </Text>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
