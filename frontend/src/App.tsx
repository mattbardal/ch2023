import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import MainContainer from "./container/MainContainer";

function App() {
  return (
    <Container minW={{ base: "md", md: "2xl", lg: "5xl" }}>
      <Header />
      <MainContainer />
    </Container>
  );
}

export default App;
