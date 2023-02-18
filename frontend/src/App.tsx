import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Container minW="4xl">
      <Header />
    </Container>
  );
}

export default App;
