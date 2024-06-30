import { Container } from "@chakra-ui/react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <Container
      maxW="100%"
      minW="350px"
      centerContent
      m={0}
      p={0}
      bg="rgb(32 32 32)"
    >
      <Home />
      <About />
      <Projects />
    </Container>
  );
}
