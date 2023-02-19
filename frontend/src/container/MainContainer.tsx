
import { Box, Center, Grid, GridItem, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import Graph from "../components/Graph";
import PercentWheel from "../components/PercentWheel";
import Selects from "../components/Selects";
import Sliders from "../components/Sliders";
import InfoButton from "../components/InfoButton";

import { useEffect, useState } from "react";
import { Data } from "../types";

export default function MainContainer() {
  const [sliderValue1, setSliderValue1] = useState(1);
  const [sliderValue2, setSliderValue2] = useState(1);
  const [sliderValue3, setSliderValue3] = useState(1);
  const handleSlider1 = (val:any) => {setSliderValue1(val)}
  const handleSlider2 = (val:any) => {setSliderValue2(val)}
  const handleSlider3 = (val:any) => {setSliderValue3(val)}
  const [value, setValue] = useState('svr')
  const [data, setData] = useState<Data>({
    actual: {
      1975: 0,
      1981: 0,
      1987: 0,
      1991: 0,
      1994: 0,
      1997: 0,
      1998: 0,
      2000: 0,
      2004: 0,
      2007: 0,
      2010: 0,
      2012: 0,
      2013: 0,
      2014: 0,
      2015: 0,
      2016: 0,
      2017: 0,
    },
    prediction: 0
  });

  useEffect(() => {
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: {value},
        params: [
          // 65 inputs
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

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
          <Graph data={data} />
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

            <RadioGroup onChange={setValue} value={value}>
              <Stack 
                direction='row'
                bg='grey.50'
                py='5px'
                px='25px'
                borderRadius='lg'
                boxShadow='lg'
              >
                <Radio 
                  value='svr' 
                  size='lg'
                  colorScheme='purple'
                >
                  SVR
                </Radio>
                <Radio 
                  value='rfr' 
                  size='lg'
                  colorScheme='purple'
                >
                  RFR
                </Radio>
              </Stack>
            </RadioGroup>
          </Center>
          <Center pt='20px' w="100%">
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
