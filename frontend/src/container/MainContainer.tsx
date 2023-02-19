import { Box, Center, Grid, GridItem, IconButton } from "@chakra-ui/react";
import Graph from "../components/Graph";
import PercentWheel from "../components/PercentWheel";
import Selects from "../components/Selects";
import Sliders from "../components/Sliders";
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function MainContainer() {
  return (
    <Box borderRadius="lg">
      <Grid
        templateAreas={`"main select"
                        "footer nothing"`}
        gridTemplateColumns={"1fr 200px"}
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
          <IconButton
            aria-label='info'
            size='lg'
            borderRadius='full'
            variant='ghost'
            bg=''
            shadow='lg'
            icon={<AiOutlineInfoCircle size='lg' />}
          />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
