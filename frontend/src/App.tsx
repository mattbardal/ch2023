import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import MainContainer from "./container/MainContainer";

function App() {
  return (
    <Container minW="4xl">
      <Header />
      <MainContainer/>
    </Container>
  );
}

export default App;
