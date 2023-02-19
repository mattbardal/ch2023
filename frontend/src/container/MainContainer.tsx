import { Box, Center, Grid, GridItem, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import Graph from "../components/Graph";
import PercentWheel from "../components/PercentWheel";
import Selects from "../components/Selects";
import Sliders from "../components/Sliders";
import InfoButton from "../components/InfoButton";
import { useEffect, useState } from "react";

export default function MainContainer() {
  const [data, setData] = useState();
  const [value, setValue] = useState('svr')


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
          88.04305267, 68.88765423, 5.334666667, 2.763333333, 0.4993333333,
          8.596, 1.08, 6.82, 31.97, 17.39, 48.21, 9.66, 18.74, 13.22047428,
          31.59305006, 525193392688, 24629.21556, 30115.28124, 858875684380,
          6.200091389, 76.43441598, 41.45066667, 73.33933258, 16838398.58,
          234234234,
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

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
          <Sliders />
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
          <Center pt='25px' w="100%">
            <InfoButton />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
