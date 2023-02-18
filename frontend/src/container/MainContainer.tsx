import { Box } from "@chakra-ui/react"
import Graph from "../components/Graph"
import Selects from "../components/Selects"
import Sliders from "../components/Sliders"


export default function MainContainer() {
  return (
    <Box borderRadius='lg'>
      {/* 
      

      useStates: for each selects, for each slider --> into graph as props
      locally: graph, selects, sliders

      
      */}

      <Selects />
      <Graph />
      <Sliders />
    </Box>
  )
}
