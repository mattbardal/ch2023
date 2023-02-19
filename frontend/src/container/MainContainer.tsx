import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import Graph from "../components/Graph";
import PercentWheel from "../components/PercentWheel";
import Selects from "../components/Selects";
import Sliders from "../components/Sliders";
import InfoButton from "../components/InfoButton";

export default function MainContainer() {
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
          <Center h="100%" w="100%">
            <InfoButton />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
