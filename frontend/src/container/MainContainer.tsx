import { Box, Center, Grid, GridItem, Radio, RadioGroup, Stack, Text, Container } from "@chakra-ui/react";
import Graph from "../components/Graph";
import PercentWheel from "../components/PercentWheel";
import Selects from "../components/Selects";
import Sliders from "../components/Sliders";
import InfoButton from "../components/InfoButton";
import Header from "../components/Header";

import { useEffect, useState } from "react";
import { Data } from "../types";

export default function MainContainer() {
  const [sliderValue1, setSliderValue1] = useState(1);
  const [sliderValue2, setSliderValue2] = useState(1);
  const [sliderValue3, setSliderValue3] = useState(1);
  const [country, setCountry] = useState('CA')
  const [stats, setStats] = useState({"MSE": 0, "RMSE": 0, "STD": 0});
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
    prediction: 0,
    model_stats: {"MSE": 0, "RMSE": 0, "STD": 0}
  });

  useEffect(() => {
    let params;
    if (country === 'AU') {
      params = [83.6890564,64.61264038,5.97,4.59 * sliderValue1 ,0.99 * sliderValue1,11.54 * sliderValue1,0.72 * sliderValue1,5.21,
        7.59,38.49 * sliderValue2,60.71,18.52,30.98,14.04586029,25.9484005,5.285840034,82.58000183,52.13999939,76.13999939,12190657,1.69747275 * sliderValue3
      ]
    } else if (country === 'NL') {
      params = [95.9725266,69.4786911,5.952,4.568 *sliderValue1,0.836 *sliderValue1,11.35666667 *sliderValue1,0 * sliderValue1,10.35,
        11.94,37.28 *sliderValue2,64.49,13.67,23.57,12.08611012,28.93989944,5.285840034,80.98000336,46.81000137,70.11000061,8989556,0.294820793 * sliderValue3
      ]
    } else {
      params = [
        68.6167984, 67.09266667, 5.78, 4.55 * sliderValue1, 0.87 * sliderValue1, 11.2 * sliderValue1, 1.37*  sliderValue1, 6.31,
        10.81, 50.62 * sliderValue2, 60.35, 15.87, 27.47, 13.68523158, 26.93811741, 5.143452963, 85.826, 62.696, 80.98798, 9322131, 1.042235716 * sliderValue3
      ]
    }

    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: value,
        country: country,
        params: params,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setStats(data.model_stats)
      });
  }, [sliderValue1, sliderValue2, sliderValue3, country, value]);

  return (
    <Container minW={{ base: "md", md: "2xl", lg: "5xl" }}>
    <Header country={country} />
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
          <Selects setCountry={setCountry}/>
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
          <PercentWheel stats={stats} />
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
    </Container>
  );
}
